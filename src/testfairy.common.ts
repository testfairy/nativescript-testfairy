var INSTANCE: TestFairyApi;

export interface TestFairyApi {
  /**
   * Initialize a TestFairy session with options.
   *
   * @param appToken Your key as given to you in your TestFairy account
   */
  begin(appToken: string): void;

  /**
   * Returns the address of the recorded session on testfairy's
   * developer portal. Will return nil if recording not yet started.
   *
   * @return session URL
   */  
  getSessionUrl(): string;

  /**
   * Returns SDK version (x.x.x) string
   *
   * @return version
   */
  getVersion(): string;

  /**
   * Hides a specific view from appearing in the video generated.
   *
   * @param view The specific view you wish to hide from screenshots
   */ 
  hideView(view: any): void;

  /**
   * Change the server endpoint for use with on-premise hosting. Please
   * contact support or sales for more information. Must be called before begin
   *
   * @param serverOverride server address for use with TestFairy
   */  
  setServerEndpoint(endpoint: string): void;

  /**
   * Send a feedback on behalf of the user. Call when using a in-house
   * feedback view controller with a custom design and feel. Feedback will
   * be associated with the current session.
   *
   * @param feedbackString Feedback text
   */  
  sendUserFeedback(feedback: string): void;

  /**
   * Pushes the feedback view controller. Hook a button
   * to this method to allow users to provide feedback about the current
   * session. All feedback will appear in your build report page, and in
   * the recorded session page.
   * 
   * NOTE: Only available on iOS
   */  
  pushFeedbackController(): void;

  /**
   * Marks an event in session. Use this text to tag a session
   * with an event name. Later you can filter sessions where your
   * user passed through this event, for bettering understanding
   * user experience and behavior.
   *
   * @param name The event name
   */  
  addEvent(name: string): void;

  /**
   * Set the name of the current screen. Useful for single page
   * applications which use a single UIViewController.
   *
   * @param name logic name of current screen
   */
  setScreenName(name: string): void;

  /**
   * Pauses the current session. This method stops recoding of
   * the current session until resume has been called.
   *
   * @see resume
   */
  resume(): void;

  /**
   * Resumes the recording of the current session. This method
   * resumes a session after it was paused.
   *
   * @see pause
   */
  pause(): void;

  /**
   * Stops the current session recording. Unlike 'pause', when
   * calling 'resume', a new session will be created and will be
   * linked to the previous recording. Useful if you want short
   * session recordings of specific use-cases of the app. Hidden 
   * views and user identity will be applied to the new session 
   * as well, if started. 
   */  
  stop(): void;

  /**
   * Records a session level attribute which can be looked up via web dashboard.
   *
   * @param name The name of the attribute. Cannot be nil.
   * @param value The value associated with the attribute. Cannot be nil.
   * @return true if successfully set attribute value, false if failed with error in log.
   *
   * @note The SDK limits you to storing 64 named attributes. Adding more than 64 will fail and return true.
   */  
  setAttribute(key: string, value: string): boolean;

  /**
   * Records a user identified as an attribute. We recommend passing values such as
   * email, phone number, or user id that your app may use.
   *
   * @param userId The identifying user. Cannot be null.
   *
   */
  setUserId(userId: string): void;

  /**
   * Remote logging, use log as you would use console.log. These logs will be sent to the server.
   */  
  log(message: string): void;
}

export function getInstance(T: new () => TestFairyApi): TestFairyApi {
    if (!INSTANCE) {
        INSTANCE = new T();
    }
    return INSTANCE;
}
