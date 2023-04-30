import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { User } from "./user.model";

import { AuthData } from "./auth-data.model";
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private user:User;

    constructor(private router: Router){
        this.user = {email:'', userId:''};
    }

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authSuccessfully();
    }

    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authSuccessfully();
    }

    logout(){
        this.user = {email:'', userId:''};
        this.authChange.next(false);
        this.router.navigate(['/login'])
    }

    getUser(){
        return { ...this.user}
    }

    isAuth(){
        this.user.email != '';
    }

    private authSuccessfully(){
        this.authChange.next(true);
        this.router.navigate(['/training'])
    }
}