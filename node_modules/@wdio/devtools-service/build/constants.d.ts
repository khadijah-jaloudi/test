/**
 * performance tracing categories
 */
export declare const DEFAULT_TRACING_CATEGORIES: string[];
/**
 * ignored urls in request logger
 */
export declare const IGNORED_URLS: readonly ["data:,", "about:", "chrome-extension://"];
export declare const FRAME_LOAD_START_TIMEOUT = 2000;
export declare const TRACING_TIMEOUT = 15000;
export declare const MAX_TRACE_WAIT_TIME = 45000;
export declare const DEFAULT_NETWORK_THROTTLING_STATE: "online";
export declare const DEFAULT_FORM_FACTOR: "desktop";
export declare const UNSUPPORTED_ERROR_MESSAGE: string;
export declare const NETWORK_STATES: {
    offline: {
        offline: boolean;
        latency: number;
        downloadThroughput: number;
        uploadThroughput: number;
    };
    GPRS: {
        offline: boolean;
        downloadThroughput: number;
        uploadThroughput: number;
        latency: number;
    };
    'Regular 2G': {
        offline: boolean;
        downloadThroughput: number;
        uploadThroughput: number;
        latency: number;
    };
    'Good 2G': {
        offline: boolean;
        downloadThroughput: number;
        uploadThroughput: number;
        latency: number;
    };
    'Regular 3G': {
        offline: boolean;
        latency: any;
        downloadThroughput: number;
        uploadThroughput: number;
    };
    'Good 3G': {
        offline: boolean;
        latency: any;
        downloadThroughput: number;
        uploadThroughput: number;
    };
    'Regular 4G': {
        offline: boolean;
        downloadThroughput: number;
        uploadThroughput: number;
        latency: number;
    };
    DSL: {
        offline: boolean;
        downloadThroughput: number;
        uploadThroughput: number;
        latency: number;
    };
    Wifi: {
        offline: boolean;
        downloadThroughput: number;
        uploadThroughput: number;
        latency: number;
    };
    online: {
        offline: boolean;
        latency: number;
        downloadThroughput: number;
        uploadThroughput: number;
    };
};
export declare const CLICK_TRANSITION = "click transition";
export declare const DEFAULT_THROTTLE_STATE: {
    readonly networkThrottling: "online" | "offline" | "GPRS" | "Regular 2G" | "Good 2G" | "Regular 3G" | "Good 3G" | "Regular 4G" | "DSL" | "Wifi";
    readonly cpuThrottling: 0;
    readonly cacheEnabled: false;
    readonly formFactor: "desktop";
};
export declare const NETWORK_RECORDER_EVENTS: readonly ["Network.requestWillBeSent", "Network.requestServedFromCache", "Network.responseReceived", "Network.dataReceived", "Network.loadingFinished", "Network.loadingFailed", "Network.resourceChangedPriority"];
export declare const PWA_AUDITS: {
    readonly isInstallable: any;
    readonly serviceWorker: any;
    readonly splashScreen: any;
    readonly themedOmnibox: any;
    readonly contentWith: any;
    readonly viewport: any;
    readonly appleTouchIcon: any;
    readonly maskableIcon: any;
};
//# sourceMappingURL=constants.d.ts.map