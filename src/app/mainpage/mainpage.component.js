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
var AppMainpage = (function () {
    function AppMainpage(authService, router) {
        this.authService = authService;
        this.router = router;
        this.fetch();
    }
    AppMainpage.prototype.fetch = function () {
        var _this = this;
        this.authService.fetchAllTweets().subscribe(function (data) {
            console.log('Tweets fetched');
            _this.tweets = data;
        });
    };
    AppMainpage.prototype.flagTweet = function (id) {
        this.authService.flagTweet(id).subscribe(function (data) {
            console.log('Tweet flagged');
        });
        this.router.navigate(['/profile']);
    };
    return AppMainpage;
}());
AppMainpage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './mainpage.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], AppMainpage);
exports.AppMainpage = AppMainpage;
//# sourceMappingURL=mainpage.component.js.map