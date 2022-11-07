import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
// import {NgxEncryptCookieService} from "ngx-encrypt-cookie";
import {map} from "rxjs/operators";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthModel } from '../../../models/authModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject!:BehaviorSubject<any>;
  user!: Observable<any>;


  constructor() {
  }
}
