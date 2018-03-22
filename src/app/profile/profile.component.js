"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var authentication_service_1 = require("../services/authentication.service");
var router_1 = require("@angular/router");
var AppProfile = (function () {
    function AppProfile(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.model = {};
        this.authService.fetchUsersSettings().subscribe(function (data) {
            if (data > 0) {
                _this.banner = "You are not watching offensive tweets, click here to change it.";
            }
            else {
                _this.banner = "You are watching offensive tweets, click here to change it.";
            }
        });
        this.fetchMyTweets();
    }
    AppProfile.prototype.tweet = function () {
        this.authService.tweet(this.model.new).subscribe(function (data) {
            console.log("Tweet has been added");
        });
        this.router.navigate(['/main']);
    };
    AppProfile.prototype.fetchMyTweets = function () {
        var _this = this;
        this.authService.fetchAllUsersTweets().subscribe(function (data) {
            console.log('Users tweets fetched');
            _this.tweets = data;
        });
    };
    AppProfile.prototype.changeSettings = function () {
        var _this = this;
        this.authService.changeSettings().subscribe(function (data) {
            console.log("Settings changed");
            _this.router.navigate(['/main']);
        });
    };
    return AppProfile;
}());
AppProfile = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './profile.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], AppProfile);
exports.AppProfile = AppProfile;
//# sourceMappingURL=profile.component.js.map