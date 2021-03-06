import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User, AuthService } from 'src/services/auths/auth.service';
import { environment } from 'src/environments/environment';
import { ToastService } from 'src/share/components/toast/toast.service';
import { SimpleReuseStrategy } from '../simple-reuse-srategy';

@Component({
  selector: 'nm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  // 登录的loding
  loading: boolean = false;

  // 用户对象
  user: User = new User();

  constructor(
    public authService: AuthService,
    public toastService: ToastService,
    public router: Router
  ) { }

  ngOnInit() {
    this.user.account = 'admin';
    this.user.password = '123qwe';
  }

  // 登录
  login() {
    if (this.loading == false) {
      this.loading = true;
      if (this.user.account && this.user.password) {
        this.authService.login(this.user).subscribe(x => {
          if (this.authService.isLoggedIn) {

            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : `/${environment.layout}`;
            this.router.navigate([redirect]);
          }
          this.loading = false;
        }, y => {
          this.loading = false;
        })
      } else {
        this.loading = false;
        this.toastService.create("用户名或密码不能为空！")
      }
    }
  }
}
