sap.ui.define(["./BaseController"],function(e){"use strict";return e.extend("ui5lab.browser.controller.HomeTable",{onShowLibrary:function(e){var t=e.getSource(),i=t.getBindingContext("homeView").getObject().id;this.getModel("appView").setProperty("/helpVisible",false);this.getRouter().navTo("sampleList",{libraryId:i})}})});