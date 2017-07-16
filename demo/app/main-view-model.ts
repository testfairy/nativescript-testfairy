import { Observable } from 'tns-core-modules/data/observable';
import { TestFairySDK } from 'nativescript-testfairy';
import * as application from 'tns-core-modules/application';

class DataItem {
    constructor(public name: string) { }
}

export class HelloWorldModel extends Observable {
  public myItems: Array<DataItem>;

  constructor() {
    super();
    this.myItems = [
    	new DataItem("begin"),
    	new DataItem("log"),
    	new DataItem("setAttribute"),
    	new DataItem("setUserId"),
    	new DataItem("pause"),
    	new DataItem("resume"),
    	new DataItem("stop"),
    	new DataItem("hideView"),
    ];
  }

  public onTap(args) {
	var itemIndex = args.index;
	console.log("index " + itemIndex);

	if (itemIndex == 0) {
		// TestFairySDK.begin("5b3af35e59a1e074e2d50675b1b629306cf0cfbd");
	} else if (itemIndex == 1) {
		TestFairySDK.log("new message");
	} else if (itemIndex == 2) {
		TestFairySDK.setAttribute("attribute", "new attribute");
	} else if (itemIndex == 3) {
		TestFairySDK.setUserId("support@testfairy.com");
	} else if (itemIndex == 4) {
		TestFairySDK.pause();
	} else if (itemIndex == 5) {
		TestFairySDK.resume();
	} else if (itemIndex == 6) {
		TestFairySDK.stop();
	} else if (itemIndex == 7) {
		var page = args.object;
  		TestFairySDK.hideView(page);
	} else {
		console.log("unsupported index " + itemIndex);
	}
  }
}