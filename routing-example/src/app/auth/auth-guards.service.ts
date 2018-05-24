import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router/src/router_state";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardsService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.user){
      return true;
    }
    this.router.navigate(['/login', {name: route.component['name']}]);
    return false;
  };

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  };


}
