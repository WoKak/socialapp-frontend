"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var profile_component_1 = require("./profile/profile.component");
var mainpage_component_1 = require("./mainpage/mainpage.component");
var app_routing_1 = require("./app.routing");
var auth_guard_1 = require("./guard/auth.guard");
var authentication_service_1 = require("./services/authentication.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var logout_component_1 = require("./logout/logout.component");
var registration_component_1 = require("./registration/registration.component");
var login_component_1 = require("./login/login.component");
var friends_component_1 = require("./friends/friends.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule, http_1.HttpClientModule],
        declarations: [app_component_1.AppComponent, mainpage_component_1.AppMainpage, profile_component_1.AppProfile, login_component_1.AppLogin, logout_component_1.AppLogout, registration_component_1.AppRegistration, friends_component_1.AppFriends],
        providers: [auth_guard_1.AuthGuard, authentication_service_1.AuthenticationService, http_1.HttpClient],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map