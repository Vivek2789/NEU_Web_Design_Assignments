import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:string =  localStorage.getItem('username');
  
  constructor(public modalService: NgbModal,private router: Router) {}

  ngOnInit() {
  }
  
  ngOnChanges() {
    console.log('HERE IN BACK');
  }
  logout() {
    
      localStorage.removeItem('username');
      this.router.navigate(['/login']);
  }
  openModal(testModal){
    this.modalService.open(testModal,{

    }).result.then((result)=>{
      if(result=='yes'){
        console.log("yes");
      }else{
        console.log("no");
      }
    })

  }
 
}
