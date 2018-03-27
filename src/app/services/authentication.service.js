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
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var http_1 = require("@angular/common/http");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', '');
        return this.http.post('http://localhost:8443/auth/login', { username: username, password: password }, { headers: httpHeaders })
            .map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            _this.currentUser = response.username;
            _this.token = response.token;
            return response.token;
        });
    };
    AuthenticationService.prototype.tweet = function (tweet) {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.post('http://localhost:8443/profile/tweet', { owner: this.currentUser, tweet: tweet }, { headers: httpHeaders })
            .map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            return response.owner;
        });
    };
    AuthenticationService.prototype.fetchAllTweets = function () {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.get('http://localhost:8443/main/fetch-tweets/' + this.currentUser, { headers: httpHeaders }).map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            return response;
        });
    };
    AuthenticationService.prototype.fetchAllUsersTweets = function () {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.get('http://localhost:8443/profile/fetch-users-tweets/' + this.currentUser, { headers: httpHeaders }).map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            return response;
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.post('http://localhost:8443/auth/logout', { username: this.currentUser, token: this.token }, { headers: httpHeaders }).map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            _this.token = '';
            return response.user;
        });
    };
    AuthenticationService.prototype.register = function (username, password) {
        var httpHeaders = new http_1.HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:3000').set('Token', '');
        return this.http.post('http://localhost:8443/auth/register', { username: username, password: password }, { headers: httpHeaders })
            .map(function (data) {
            return username;
        });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        if (this.token.length != 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.fetchUsersSettings = function () {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.get('http://localhost:8443/profile/fetch-users-settings/' + this.currentUser, { headers: httpHeaders }).map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            return response;
        });
    };
    AuthenticationService.prototype.changeSettings = function () {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.get('http://localhost:8443/profile/change-users-settings/' + this.currentUser, { headers: httpHeaders }).map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            return response;
        });
    };
    AuthenticationService.prototype.fetchFriends = function () {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.get('http://localhost:8443/friends/fetch-friends/' + this.currentUser, { headers: httpHeaders }).map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            return response;
        });
    };
    AuthenticationService.prototype.addFriend = function (friendname) {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.get('http://localhost:8443/friends/add-friend/' + this.currentUser + "/" + friendname, { headers: httpHeaders })
            .map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            return response.owner;
        });
    };
    AuthenticationService.prototype.removeFriend = function (friend) {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.get('http://localhost:8443/friends/remove-friend/' + this.currentUser + "/" + friend, { headers: httpHeaders })
            .map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            return response.owner;
        });
    };
    AuthenticationService.prototype.flagTweet = function (id) {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Access-Control-Allow-Origin', 'http://localhost:3000')
            .set('Token', this.token);
        return this.http.get('http://localhost:8443/main/flag-tweet/' + id, { headers: httpHeaders }).map(function (data) {
            var response = JSON.parse(JSON.stringify(data['entity'], null, 4));
            return response;
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map
