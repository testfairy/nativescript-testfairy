import { TestFairyApi, getInstance } from './testfairy.common';
import * as app from 'tns-core-modules/application';

declare var com: any;

class TestFairyAndroid implements TestFairyApi {
  public begin(appToken: string): void {
    com.testfairy.TestFairy.begin(app.android.context, appToken);
  }

  public getSessionUrl(): string {
    return com.testfairy.TestFairy.getSessionUrl();
  }

  public getVersion(): string {
    return com.testfairy.TestFairy.getVersion();
  }

  public hideView(view: any): void {
    let hidden = view.android == null ? view : view.android;
    com.testfairy.TestFairy.hideView(hidden);
  }

  public setServerEndpoint(endpoint: string): void {
  com.testfairy.TestFairy.setServerEndpoint(endpoint);
  }

  public sendUserFeedback(feedback: string): void {
  com.testfairy.TestFairy.sendUserFeedback(feedback);
  }

  public pushFeedbackController(): void {
    com.testfairy.TestFairy.showFeedbackForm();
  }

  public addEvent(name: string): void {
  com.testfairy.TestFairy.addEvent(name);
  }

  public setScreenName(name: string): void {
  com.testfairy.TestFairy.setScreenName(name);
  }

  public resume(): void {
  com.testfairy.TestFairy.resume();
  }

  public pause(): void {
  com.testfairy.TestFairy.pause();
  }

  public stop(): void {
  com.testfairy.TestFairy.stop();
  }

  public setAttribute(key: string, value: string): boolean {
    return com.testfairy.TestFairy.setAttribute(key, value);
  }

  public setUserId(userId: string): void {
    com.testfairy.TestFairy.setUserId(userId);
  }

  public log(message: string): void  {
  com.testfairy.TestFairy.log("NativescriptTestFairy", message);
  }

  public enableCrashHandler(): void {
    com.testfairy.TestFairy.enableCrashHandler();
  }

  public disableCrashHandler(): void {
    com.testfairy.TestFairy.disableCrashHandler();
  }

  public enableMetric(metric: string): void {
    com.testfairy.TestFairy.enableMetric();
  }

  public disableMetric(metric: string): void {
    com.testfairy.TestFairy.disableMetric();
  }

  public enableVideo(policy: string, quality: string, framesPerSecond: number): void {
    com.testfairy.TestFairy.enableVideo();
  }

  public disableVideo(): void {
    com.testfairy.TestFairy.disableVideo();
  }

  public enableFeedbackForm(method: string): void {
    com.testfairy.TestFairy.enableFeedbackForm();
  }

  public disableFeedbackForm(): void {
    com.testfairy.TestFairy.disableFeedbackForm();
  }

  public setMaxSessionLength(seconds: number): void {
    com.testfairy.TestFairy.setMaxSessionLength(seconds);
  }
}

export const TestFairySDK: TestFairyApi = getInstance(TestFairyAndroid);
