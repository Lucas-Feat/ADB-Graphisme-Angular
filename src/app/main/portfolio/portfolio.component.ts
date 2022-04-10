import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/project.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProjectService } from 'src/app/project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @Input() title?: String;

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
  projects: Project[] | undefined;

  constructor(private projetService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projetService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }
}
