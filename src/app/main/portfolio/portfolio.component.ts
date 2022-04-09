import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    margin: 50,
    center: true,
    autoHeight: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
    nav: false,
  };

  projects: Project[] = [
    new Project(
      '1',
      'PSA',
      'Stellantis',
      'assets/img/portfolio/portfolio-1.jpg'
    ),
    new Project(
      '2',
      'PSA',
      'Stellantis',
      'assets/img/portfolio/portfolio-2.jpg'
    ),
    new Project(
      '3',
      'Web-dev',
      'Lucas',
      'assets/img/portfolio/portfolio-3.png'
    ),
    new Project('4', 'Wouaw', 'Pascal', 'assets/img/portfolio/portfolio-4.jpg'),
    new Project('5', 'PSA', 'Autres', 'assets/img/portfolio/portfolio-5.jpg'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
