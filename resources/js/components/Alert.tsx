import { useEffect, useState } from 'react';

interface AlertProps {
    type?: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    message: string;
    dismissible?: boolean;
    onDismiss?: () => void;
    autoClose?: number; // milliseconds
}

export default function Alert({
    type = 'info',
    title,
    message,
    dismissible = true,
    onDismiss,
    autoClose,
}: AlertProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (autoClose) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onDismiss?.();
            }, autoClose);
            return () => clearTimeout(timer);
        }
    }, [autoClose, onDismiss]);

    if (!isVisible) return null;

    const styles = {
        success: {
            bg: 'bg-emerald-50 dark:bg-emerald-950',
            border: 'border-emerald-200 dark:border-emerald-800',
            title: 'text-emerald-900 dark:text-emerald-100',
            text: 'text-emerald-700 dark:text-emerald-200',
            icon: 'text-emerald-600 dark:text-emerald-400',
            close: 'hover:bg-emerald-100 dark:hover:bg-emerald-900',
        },
        error: {
            bg: 'bg-red-50 dark:bg-red-950',
            border: 'border-red-200 dark:border-red-800',
            title: 'text-red-900 dark:text-red-100',
            text: 'text-red-700 dark:text-red-200',
            icon: 'text-red-600 dark:text-red-400',
            close: 'hover:bg-red-100 dark:hover:bg-red-900',
        },
        warning: {
            bg: 'bg-amber-50 dark:bg-amber-950',
            border: 'border-amber-200 dark:border-amber-800',
            title: 'text-amber-900 dark:text-amber-100',
            text: 'text-amber-700 dark:text-amber-200',
            icon: 'text-amber-600 dark:text-amber-400',
            close: 'hover:bg-amber-100 dark:hover:bg-amber-900',
        },
        info: {
            bg: 'bg-blue-50 dark:bg-blue-950',
            border: 'border-blue-200 dark:border-blue-800',
            title: 'text-blue-900 dark:text-blue-100',
            text: 'text-blue-700 dark:text-blue-200',
            icon: 'text-blue-600 dark:text-blue-400',
            close: 'hover:bg-blue-100 dark:hover:bg-blue-900',
        },
    };

    const style = styles[type];

    const icons = {
        success: (
            <svg className={`h-5 w-5 ${style.icon}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
        ),
        error: (
            <svg className={`h-5 w-5 ${style.icon}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
        ),
        warning: (
            <svg className={`h-5 w-5 ${style.icon}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
        ),
        info: (
            <svg className={`h-5 w-5 ${style.icon}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
        ),
    };

    return (
        <div
            className={`animate-fade-in rounded-lg border ${style.bg} ${style.border} p-4 shadow-sm transition-all duration-300`}
            role="alert"
        >
            <div className="flex gap-3">
                <div className="flex-shrink-0">{icons[type]}</div>
                <div className="flex-1">
                    {title && <h3 className={`font-semibold ${style.title}`}>{title}</h3>}
                    <p className={style.text}>{message}</p>
                </div>
                {dismissible && (
                    <button
                        onClick={() => {
                            setIsVisible(false);
                            onDismiss?.();
                        }}
                        className={`flex-shrink-0 rounded p-1 transition-colors ${style.close}`}
                        aria-label="Dismiss alert"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}
