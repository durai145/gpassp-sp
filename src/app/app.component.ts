import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  implements OnInit  {
  title = 'gpasso-sp';
  header: any;
  ngOnInit() {
   this.header = document.getElementById('myHeader');
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sticky = this.header.offsetTop;
    console.log('Scrolling!');
    if (window.pageYOffset > sticky) {
      this.header.classList.add('sticky');
    } else {
      this.header.classList.remove('sticky');
    }
  }
}
