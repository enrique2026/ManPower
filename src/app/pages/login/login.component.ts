import { AfterViewInit, Component, OnInit,Renderer2 } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  
  formGroup: FormControl | any;

  // addFocus(el: HTMLDivElement,input:any){
  //   this.render.addClass(el,"focus");
  //   }
  
  //   removeFocus(el: HTMLDivElement,input:any){
  //     if(this.formGroup.getRawValue()[input].toString().trim().length==0){
  
  //       this.render.removeClass(el,"focus");
  //     } 
  //   } 




  // constructor(private readonly  render:Renderer2,private builder:FormBuilder,private auth:TestAuthService,private router:Router,
  //   private authService:AuthService) { }

  ngOnInit(): void {
  }


  
  ngAfterViewInit(): void {
  }

}
