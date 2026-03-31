interface FormErrorProps {
    message?: string;
    className?: string;
}

export default function FormError({ message, className = '' }: FormErrorProps) {
    if (!message) return null;

    return (
        <div className={`flex items-start gap-2 rounded-md bg-red-50 dark:bg-red-950/30 p-3 ${className}`}>
            <svg className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5h2V3h-2V1h-2v2h-2v2h2v2h2V5zM9 4a5 5 0 1010 0A5 5 0 009 4zm0 8a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-medium text-red-700 dark:text-red-200">{message}</p>
        </div>
    );
}
