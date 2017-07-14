import * as application from 'tns-core-modules/application';
import { TestFairySDK } from 'nativescript-testfairy';

application.on(application.launchEvent, (args) => {
    TestFairySDK.begin("5b3af35e59a1e074e2d50675b1b629306cf0cfbd");
});

application.start({ moduleName: "main-page" });
