import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  hide: boolean = true;
  hide2: boolean = true;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  onLogin(){
    this.router.navigate(['/login']);
  }

}
