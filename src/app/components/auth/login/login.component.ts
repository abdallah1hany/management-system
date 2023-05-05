import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['',[Validators.required]]
  })


  constructor(
    private authApi : AuthService,
    private fb : FormBuilder)
  {
  };

  ngOnInit(): void {
  }

  login() {
    this.authApi.login(this.form.value.email, this.form.value.password);
  }

}
