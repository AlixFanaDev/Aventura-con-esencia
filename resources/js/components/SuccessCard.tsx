interface SuccessCardProps {
    title?: string;
    message: string;
    subtitle?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}

export default function SuccessCard({ title, message, subtitle, action }: SuccessCardProps) {
    return (
        <div className="animate-fade-in rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950 dark:to-emerald-900/50 border border-emerald-200 dark:border-emerald-800 p-8 text-center">
            <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-3">
                    <svg className="h-12 w-12 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            {title && <h3 className="mb-2 text-2xl font-bold text-emerald-900 dark:text-emerald-100 font-heading">{title}</h3>}

            <p className="mb-4 text-emerald-700 dark:text-emerald-200">{message}</p>

            {subtitle && <p className="mb-6 text-sm text-emerald-600 dark:text-emerald-300">{subtitle}</p>}

            {action && (
                <button
                    onClick={action.onClick}
                    className="inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 px-6 py-2 font-semibold text-white transition-colors"
                >
                    {action.label}
                </button>
            )}
        </div>
    );
}
