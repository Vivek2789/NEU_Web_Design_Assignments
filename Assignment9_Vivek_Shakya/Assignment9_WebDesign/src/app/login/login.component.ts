import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../service/user.service';
import { LoginService } from '../service/login.service';
import{User} from '../model/user.model';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  name:String = "";
  closeResult: any;
  result: any;
  constructor(private loginService: LoginService, private router: Router, private modalService: NgbModal) { }

  

  ngOnInit() {
  }
  login(content){
    localStorage.setItem('username', this.model.userName);
    console.log(this.model.userName);
    
    this.loginService.getUser(this.model).subscribe(
      
      
        data => {        
          console.log(data);
          let result: any = data;
          localStorage.setItem('firstName', result.user.firstName);
          localStorage.setItem('lastName', result.user.lastName);
          localStorage.setItem('userName', result.user.userName);
          localStorage.setItem('password', result.user.password);
          this.router.navigate(['/login-home'])
      }, (err) => {
        console.log('ERROR=' + JSON.stringify(err.error.message));
        this.open(content);
        this.result = err.error.message;
        
      });
      
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
