export type NewsletterToastPayload = { message: string; type: 'success' | 'error' };

export type NewsletterActionResult = {
    ok: boolean;
    message: string;
};

function getCsrfToken(): string {
    return document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ?? '';
}

function parseJsonMessage(data: unknown): string {
    if (!data || typeof data !== 'object') {
        return '';
    }
    const d = data as Record<string, unknown>;
    if (typeof d.message === 'string' && d.message.trim() !== '') {
        return d.message;
    }
    if (d.errors && typeof d.errors === 'object') {
        for (const value of Object.values(d.errors)) {
            if (Array.isArray(value) && value[0] != null) {
                return String(value[0]);
            }
        }
    }
    return '';
}

async function postJson(url: string, body: Record<string, unknown>): Promise<NewsletterActionResult> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-CSRF-TOKEN': getCsrfToken(),
        },
        body: JSON.stringify(body),
    });

    const data: unknown = await response.json().catch(() => ({}));
    const message = parseJsonMessage(data);

    return {
        ok: response.ok,
        message,
    };
}

export async function postNewsletterSubscribe(payload: { email: string; name?: string }): Promise<NewsletterActionResult> {
    return postJson('/newsletter/subscribe', {
        email: payload.email,
        name: payload.name ?? '',
    });
}

export async function postNewsletterUnsubscribe(payload: { email: string }): Promise<NewsletterActionResult> {
    return postJson('/newsletter/unsubscribe', {
        email: payload.email,
    });
}

export function showNewsletterToast(
    setToast: (value: NewsletterToastPayload | null) => void,
    payload: NewsletterToastPayload,
    dismissMs = 4000,
): void {
    setToast(payload);
    window.setTimeout(() => setToast(null), dismissMs);
}
