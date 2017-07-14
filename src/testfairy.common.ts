var INSTANCE: TestFairyApi;

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
}

export function getInstance(T: new () => TestFairyApi): TestFairyApi {
    if (!INSTANCE) {
        INSTANCE = new T();
    }
    return INSTANCE;
}