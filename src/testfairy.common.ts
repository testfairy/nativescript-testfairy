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

	/**
	 * Enables the ability to capture crashes. TestFairy
	 * crash handler is installed by default. Once installed
	 * it cannot be uninstalled. Must be called before begin.
	 */
	enableCrashHandler(): void;

	/**
	 * Disables the ability to capture crashes. TestFairy
	 * crash handler is installed by default. Once installed
	 * it cannot be uninstalled. Must be called before begin.
	 */
	disableCrashHandler(): void;

	/**
	 * Enables recording of a metric regardless of build settings.
	 * Valid values include 'cpu', 'memory', 'logcat', 'battery', 'network-requests'
	 * A metric cannot be enabled and disabled at the same time, therefore
	 * if a metric is also disabled, the last call to enable to disable wins.
	 * Must be called be before begin.
	 */
	enableMetric(metric: string): void;

	/**
	 * Disables recording of a metric regardless of build settings.
	 * Valid values include "cpu", "memory", "logcat", "battery", "network-requests"
	 * A metric cannot be enabled and disabled at the same time, therefore
	 * if a metric is also disabled, the last call to enable to disable wins.
	 * Must be called be before begin.
	 */
	disableMetric(metric: string): void;

	/**
	 * Enables the ability to capture video recording regardless of build settings.
	 * Valid values for policy include "always", "wifi" and "none"
	 * Valid values for quality include "high", "low", "medium"
	 * Values for fps must be between 0.1 and 2.0. Value will be rounded to
	 * the nearest frame.
	 */
	enableVideo(policy: string, quality: string, framesPerSecond: number): void;

	/**
	 * Disables the ability to capture video recording. Must be
	 * called before begin.
	 */
	disableVideo(): void;

	/**
	 * Enables the ability to present the feedback form
	 * based on the method given. Valid values only include
	 * "shake". If an unrecognized method is passed,
	 * the value defined in the build settings will be
	 * used. Must be called before begin.
	 */
	enableFeedbackForm(method: string): void;

	/**
	 * Disables the ability to present users with feedback when
	 * devices is shaken, or if a screenshot is taken. Must be called
	 * before begin.
	 */
	disableFeedbackForm(): void;

	/**
	 * Sets the maximum recording time. Minimum value is 60 seconds,
	 * else the value defined in the build settings will be used. The
	 * maximum value is the lowest value between this value and the
	 * value defined in the build settings.
	 * Time is rounded to the nearest minute.
	 * Must be called before begin.
	 */
	setMaxSessionLength(seconds: number);
}

export function getInstance(T: new () => TestFairyApi): TestFairyApi {
    if (!INSTANCE) {
        INSTANCE = new T();
    }
    return INSTANCE;
}
