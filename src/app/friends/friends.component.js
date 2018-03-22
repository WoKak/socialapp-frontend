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
var AppFriends = (function () {
    function AppFriends(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = {};
        this.fetchFriends();
    }
    AppFriends.prototype.addFriend = function () {
        this.authService.addFriend(this.model.new).subscribe(function (data) {
            console.log('Friend added');
        });
        this.router.navigate(['/main']);
    };
    AppFriends.prototype.fetchFriends = function () {
        var _this = this;
        this.authService.fetchFriends().subscribe(function (data) {
            console.log('Users friends fetched');
            _this.friends = data;
        });
    };
    AppFriends.prototype.removeFriend = function (friend) {
        this.authService.removeFriend(friend).subscribe(function (data) {
            console.log('Friend has been removed');
        });
        this.router.navigate(['/main']);
    };
    return AppFriends;
}());
AppFriends = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './friends.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], AppFriends);
exports.AppFriends = AppFriends;
//# sourceMappingURL=friends.component.js.map