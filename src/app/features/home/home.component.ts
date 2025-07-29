import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  slideshowImages: string[] = [
    'assets/slideshow/slideShowImage1.png',
    'assets/slideshow/slideShowImage2.png',
    'assets/slideshow/slideShowImage3.png'
  ];

  currentImageIndex = 0;
  private intervalId: any;
  dynamicExperTeam = 'Our experienced professionals deliver tailored solutions to fit your needs.';
  dynamicInnovativeSolutions = 'We leverage the latest technologies to help your business thrive.';
  dynamicSupport = 'We’re here whenever you need us, ensuring seamless operations.';


  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.slideshowImages.length;
    }, 4000); // Change image every 2 seconds
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  
}
