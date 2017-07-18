jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Suppliers in the list
// * All 3 Suppliers have at least one Products

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
		"com/sap/mobile/platform/cards/test/integration/MasterJourney",
		"com/sap/mobile/platform/cards/test/integration/NavigationJourney",
		"com/sap/mobile/platform/cards/test/integration/NotFoundJourney",
		"com/sap/mobile/platform/cards/test/integration/BusyJourney",
		"com/sap/mobile/platform/cards/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});