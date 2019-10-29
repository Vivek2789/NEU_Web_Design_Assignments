import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: User;
  closeResult: string;
  result = [];
  status;
  constructor(private userService: UserService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.model = {
      firstName: '',
      lastName: '',
      userName: '',
      password: ''
    };
  }

  creteUser(content) {
    this.result = [];
    this.status = '';
    this.userService.create(this.model)
      .subscribe((data) => {
        let res: any = data;
        this.status = 'Success';
        this.result = res.message;
        this.open(content);
        this.router.navigate(['/login']);
      }, (err) => {
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
