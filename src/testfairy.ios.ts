import { TestFairyApi, getInstance } from './testfairy.common';
import * as app from 'tns-core-modules/application';

declare var TestFairy: any;

class TestFairyIos implements TestFairyApi {
  public begin(appToken: string): void {
    TestFairy.begin(appToken);
  }

  public getSessionUrl(): string {
    return TestFairy.sessionUrl();
  }

  public getVersion(): string {
    return TestFairy.version();
  }

  public hideView(view: any): void {
    let hidden = view.ios == null ? view : view.ios;
    TestFairy.hideView(hidden);
  }

  public setServerEndpoint(endpoint: string): void {
    TestFairy.setServerEndpoint(endpoint);
  }

  public sendUserFeedback(feedback: string): void {
    TestFairy.sendUserFeedback(feedback);
  }

  public pushFeedbackController(): void {
    TestFairy.pushFeedbackController();
  }

  public addEvent(name: string): void {
    TestFairy.checkpoint(name);
  }

  public setScreenName(name: string): void {
    TestFairy.setScreenName(name);
  }

  public resume(): void {
    TestFairy.resume();
  }

  public pause(): void {
    TestFairy.pause();
  }

  public stop(): void {
    TestFairy.stop();
  }

  public setAttribute(key: string, value: string): boolean {
    return TestFairy.setAttributeWithValue(key, value);
  }

  public setUserId(userId: string): void {
    TestFairy.setUserId(userId);
  }

  public log(message: string): void  {
    TestFairy.log(message);
  }

  public enableCrashHandler(): void {
    TestFairy.enableCrashHandler();
  }

  public disableCrashHandler(): void {
    TestFairy.disableCrashHandler();
  }

  public enableMetric(metric: string): void {
    TestFairy.enableMetric();
  }

  public disableMetric(metric: string): void {
    TestFairy.disableMetric();
  }

  public enableVideo(policy: string, quality: string, framesPerSecond: number): void {
    TestFairy.enableVideo();
  }

  public disableVideo(): void {
    TestFairy.disableVideo();
  }

  public enableFeedbackForm(method: string): void {
    TestFairy.enableFeedbackForm();
  }

  public disableFeedbackForm(): void {
    TestFairy.disableFeedbackForm();
  }

  public setMaxSessionLength(seconds: number): void {
    TestFairy.setMaxSessionLength(seconds);
  }
}

export const TestFairySDK: TestFairyApi = getInstance(TestFairyIos);
