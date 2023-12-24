declare global {
    interface Window {
        ____lastLongTask: number;
        ____lhPerformanceObserver: PerformanceObserver;
    }
}
/**
 * Used by _waitForCPUIdle and executed in the context of the page, updates the ____lastLongTask
 * property on window to the end time of the last long task.
 */
export default function registerPerformanceObserverInPage(): void;
//# sourceMappingURL=registerPerformanceObserverInPage.d.ts.map