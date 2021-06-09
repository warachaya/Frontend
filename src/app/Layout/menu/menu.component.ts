import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginID : string | any;
  msg : string | any;

  constructor( )
  {  }



  ngOnInit(): void {
  }


}
