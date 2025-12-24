/** Utilities for the design system */
let idCounter = 0;
export function generateId(prefix = 'yash'): string {
    return `${prefix}-${++idCounter}-${Date.now()}`;
}

export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function prefersReducedMotion(): boolean {
    return (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
}
