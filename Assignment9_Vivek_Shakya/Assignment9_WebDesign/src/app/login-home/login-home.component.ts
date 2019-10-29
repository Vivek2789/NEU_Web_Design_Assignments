import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../service/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {
  model: User;
  closeResult: string;
  result = [];
  status;
  name:String = "";
  user: any;
  firstName: any;
  constructor(private userService: UserService, private router: Router, private modalService: NgbModal) { }
  

  ngOnInit() {
    this.name =  localStorage.getItem('username');
    this.firstName = localStorage.getItem('firstName');
    this.model = {
      firstName : localStorage.getItem('firstName'),
      lastName : localStorage.getItem('lastName'),
      userName : localStorage.getItem('userName'),
      password : localStorage.getItem('password')
    };
    console.log('user=' + this.user);
    //console.log(this.user.firstName);
  }
  update(content) {
    this.result = [];
    this.status = '';
  
    this.userService.updateUser(this.model)
      .subscribe(
        
        (data) => {
          this.status = 'Success';
          this.open(content);
          this.router.navigate(['/login-home']);
        },(err) => {
          this.status = 'Error';
          this.open(content);
          console.log('ERROR=' + JSON.stringify(err.error.message));
          this.result = err.error.message;
        });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
      localStorage.removeItem('username');
      this.router.navigate(['/login']);
  
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
