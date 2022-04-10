import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent implements OnInit {
  @Input() project?: Project;

  projet = new Project(
    '1',
    'PSA',
    'Stellantis',
    '2021',
    'assets/img/portfolio/portfolio-1.jpg',
    '',
    [
      [
        'assets/img/portfolio/project1/pic1.webp',
        'assets/img/portfolio/project1/pic2.webp',
      ],
      [
        'assets/img/portfolio/project1/pic3.webp',
        'assets/img/portfolio/project1/pic4.webp',
      ],
    ],
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur nobis autem ab est quam. Reiciendis soluta debitis voluptas est eaque, dolores facilis? Doloremque, laudantium neque aliquam enim inventore ab rerum magnam incidunt? Voluptatum, iure ratione! Vitae atque reprehenderit corrupti quibusdam, nulla excepturi tenetur perferendis enim, porro, quae officia similique dignissimos quod debitis sapiente! Temporibus quibusdam distinctio at a ad accusantium quae fugit fugiat blanditiis numquam dolores eum rerum ipsa dolor officia deserunt, ratione error similique reprehenderit dicta.'
  );

  constructor() {}

  ngOnInit(): void {}
}
