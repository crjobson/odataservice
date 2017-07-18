jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/mobile/platform/cards/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/mobile/platform/cards/test/integration/pages/App",
	"com/sap/mobile/platform/cards/test/integration/pages/Browser",
	"com/sap/mobile/platform/cards/test/integration/pages/Master",
	"com/sap/mobile/platform/cards/test/integration/pages/Detail",
	"com/sap/mobile/platform/cards/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.mobile.platform.cards.view."
	});

	sap.ui.require([
		"com/sap/mobile/platform/cards/test/integration/NavigationJourneyPhone",
		"com/sap/mobile/platform/cards/test/integration/NotFoundJourneyPhone",
		"com/sap/mobile/platform/cards/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});