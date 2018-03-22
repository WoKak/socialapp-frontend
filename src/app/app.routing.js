"use strict";
var profile_component_1 = require("./profile/profile.component");
var mainpage_component_1 = require("./mainpage/mainpage.component");
var router_1 = require("@angular/router");
var auth_guard_1 = require("./guard/auth.guard");
var logout_component_1 = require("./logout/logout.component");
var registration_component_1 = require("./registration/registration.component");
var friends_component_1 = require("./friends/friends.component");
var login_component_1 = require("./login/login.component");
var appRoutes = [
    { path: 'main', component: mainpage_component_1.AppMainpage, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'profile', component: profile_component_1.AppProfile, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.AppLogin },
    { path: 'logout', component: logout_component_1.AppLogout },
    { path: 'registration', component: registration_component_1.AppRegistration },
    { path: 'friends', component: friends_component_1.AppFriends, canActivate: [auth_guard_1.AuthGuard] },
    { path: '**', redirectTo: 'login' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map