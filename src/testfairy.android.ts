import { TestFairyApi,getInstance } from './testfairy.common';
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
  	com.testfairy.TestFairy.hideView(view);
  }

  public setServerEndpoint(endpoint: string): void {
	com.testfairy.TestFairy.setServerEndpoint(endpoint);
  }

  public sendUserFeedback(feedback: string): void {
	com.testfairy.TestFairy.sendUserFeedback(feedback);
  }

  public pushFeedbackController(): void {
  	// not supported
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
}

export const TestFairySDK: TestFairyApi = getInstance(TestFairyAndroid);
