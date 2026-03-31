import type { NewsletterToastPayload } from '@/lib/newsletter';

type NewsletterToastProps = {
    toast: NewsletterToastPayload | null;
};

export default function NewsletterToast({ toast }: NewsletterToastProps) {
    if (!toast) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex max-w-sm items-center gap-3 rounded-lg bg-dark/90 px-4 py-3 text-sm text-white shadow-lg">
            <div className={`h-2 w-2 rounded-full ${toast.type === 'success' ? 'bg-emerald-400' : 'bg-red-400'}`} />
            <span>{toast.message}</span>
        </div>
    );
}
