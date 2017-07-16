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
	TestFairy.hideView(view);
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
  	// Not supported
  }
}

export const TestFairySDK: TestFairyApi = getInstance(TestFairyIos);
