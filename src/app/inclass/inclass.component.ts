import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inclass',
  templateUrl: './inclass.component.html',
  styleUrls: ['./inclass.component.scss']
})
export class InclassComponent {
  constructor(private route: Router, private activatedRoute: ActivatedRoute){}

  navigateDirectory(){
    this.route.navigate(['directory'], { relativeTo:this.activatedRoute });
  }
  navigateAbout(){
    this.route.navigate(['about'], { relativeTo:this.activatedRoute });
  }
  navigateContact(){
    this.route.navigate(['contact'], { relativeTo:this.activatedRoute });
  }
}
