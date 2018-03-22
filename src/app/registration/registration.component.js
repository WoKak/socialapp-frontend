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
var authentication_service_1 = require("../services/authentication.service");
var AppRegistration = (function () {
    function AppRegistration(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
    }
    AppRegistration.prototype.register = function () {
        var _this = this;
        this.authenticationService.register(this.model.username, this.model.password).subscribe(function (data) {
            console.log("Registration successful");
            _this.router.navigate(['/login']);
        });
    };
    return AppRegistration;
}());
AppRegistration = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './registration.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, authentication_service_1.AuthenticationService])
], AppRegistration);
exports.AppRegistration = AppRegistration;
//# sourceMappingURL=registration.component.js.map