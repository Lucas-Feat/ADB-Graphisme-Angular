import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Project } from 'src/app/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [
    new Project(1, 'PSA', 'Stellantis', 'assets/img/portfolio/portfolio-1.jpg'),
    new Project(2, 'PSA', 'Stellantis', 'assets/img/portfolio/portfolio-2.jpg'),
    new Project(3, 'Web-dev', 'Lucas', 'assets/img/portfolio/portfolio-3.png'),
    new Project(4, 'Wouaw', 'Pascal', 'assets/img/portfolio/portfolio-4.jpg'),
    new Project(5, 'PSA', 'Autres', 'assets/img/portfolio/portfolio-5.jpg'),
  ];

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 1 };
  constructor() {}

  ngOnInit(): void {}
}
