export interface TestFairyApi {
    begin(appToken: string): void;
    getSessionUrl(): string;
    getVersion(): string;
    hideView(view: any): void;
    setServerEndpoint(endpoint: string): void;
    sendUserFeedback(feedback: string): void;
    pushFeedbackController(): void;
    addEvent(name: string): void;
    setScreenName(name: string): void;
    resume(): void;
    pause(): void;
    stop(): void;
    setAttribute(key: string, value: string): boolean;
    setUserId(userId: string): void;
    log(message: string): void;
    enableCrashHandler(): void;
    disableCrashHandler(): void;
    enableMetric(metric: string): void;
    disableMetric(metric: string): void;
    enableVideo(policy: string, quality: string, framesPerSecond: number): void;
    disableVideo(): void;
    enableFeedbackForm(method: string): void;
    disableFeedbackForm(): void;
    setMaxSessionLength(seconds: number): any;
    logException(error: Error): void;
}
export declare function getInstance(T: new () => TestFairyApi): TestFairyApi;
