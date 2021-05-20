import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }


  constructor(private router:Router
    ) { }
  ngOnInit(): void {
  }


  onClick(){

      this.router.navigate(["/users"]);
 
  }

}
