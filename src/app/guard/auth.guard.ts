import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {SpringService} from "../services";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private springService: SpringService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.springService.isAuthenticated();
  }
}
