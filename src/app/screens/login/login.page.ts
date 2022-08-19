import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hide: boolean = true;
  hide2: boolean = true;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  onRegister(){
    this.router.navigate(['/register']);
  }

  onHome(){
    this.router.navigate(['/home/home']);
  }

}
