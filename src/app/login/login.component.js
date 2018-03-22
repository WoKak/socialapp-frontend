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
var router_1 = require("@angular/router");
var index_1 = require("../services/index");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var AppLogin = (function () {
    function AppLogin(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
    }
    AppLogin.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.username, this.model.password).subscribe(function (data) {
            _this.token = data;
            if (_this.token !== '') {
                _this.router.navigate(['/main']);
            }
        });
    };
    return AppLogin;
}());
AppLogin = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, index_1.AuthenticationService])
], AppLogin);
exports.AppLogin = AppLogin;
//# sourceMappingURL=login.component.js.map