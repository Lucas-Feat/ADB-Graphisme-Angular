import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if (this.project === undefined) {
      this.getProject();
    }
    this.title.setTitle('Portfolio - ' + this.project?.name);
  }

  getProject(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.projectService
      .getProject(id)
      .subscribe((project) => (this.project = project));
  }
}
