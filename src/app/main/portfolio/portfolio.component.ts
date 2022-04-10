import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/project.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

  projects: Project[] = [
    new Project(
      '1',
      'PSA',
      'Stellantis',
      '2021',
      'assets/img/portfolio/portfolio-1.jpg',
      '',
      [
        ['assets/img/projet1/pic1.webp', 'assets/img/projet1/pic2.webp'],
        ['assets/img/projet1/pic3.webp', 'assets/img/projet1/pic4.webp'],
      ],
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur nobis autem ab est quam. Reiciendis soluta debitis voluptas est eaque, dolores facilis? Doloremque, laudantium neque aliquam enim inventore ab rerum magnam incidunt? Voluptatum, iure ratione! Vitae atque reprehenderit corrupti quibusdam, nulla excepturi tenetur perferendis enim, porro, quae officia similique dignissimos quod debitis sapiente! Temporibus quibusdam distinctio at a ad accusantium quae fugit fugiat blanditiis numquam dolores eum rerum ipsa dolor officia deserunt, ratione error similique reprehenderit dicta.'
    ),
    new Project(
      '2',
      'PSA',
      'Stellantis',
      '2020',
      'assets/img/portfolio/portfolio-2.jpg',
      '',
      [
        ['assets/img/projet1/pic1.webp', 'assets/img/projet1/pic2.webp'],
        ['assets/img/projet1/pic3.webp', 'assets/img/projet1/pic4.webp'],
      ],
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur nobis autem ab est quam. Reiciendis soluta debitis voluptas est eaque, dolores facilis? Doloremque, laudantium neque aliquam enim inventore ab rerum magnam incidunt? Voluptatum, iure ratione! Vitae atque reprehenderit corrupti quibusdam, nulla excepturi tenetur perferendis enim, porro, quae officia similique dignissimos quod debitis sapiente! Temporibus quibusdam distinctio at a ad accusantium quae fugit fugiat blanditiis numquam dolores eum rerum ipsa dolor officia deserunt, ratione error similique reprehenderit dicta.'
    ),
    new Project(
      '3',
      'Web-dev',
      'Lucas',
      '2020',
      'assets/img/portfolio/portfolio-3.png',
      '',
      [
        ['assets/img/projet1/pic1.webp', 'assets/img/projet1/pic2.webp'],
        ['assets/img/projet1/pic3.webp', 'assets/img/projet1/pic4.webp'],
      ],
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur nobis autem ab est quam. Reiciendis soluta debitis voluptas est eaque, dolores facilis? Doloremque, laudantium neque aliquam enim inventore ab rerum magnam incidunt? Voluptatum, iure ratione! Vitae atque reprehenderit corrupti quibusdam, nulla excepturi tenetur perferendis enim, porro, quae officia similique dignissimos quod debitis sapiente! Temporibus quibusdam distinctio at a ad accusantium quae fugit fugiat blanditiis numquam dolores eum rerum ipsa dolor officia deserunt, ratione error similique reprehenderit dicta.'
    ),
    new Project(
      '4',
      'Wouaw',
      'Pascal',
      '2020',
      'assets/img/portfolio/portfolio-4.jpg',
      '',
      [
        ['assets/img/projet1/pic1.webp', 'assets/img/projet1/pic2.webp'],
        ['assets/img/projet1/pic3.webp', 'assets/img/projet1/pic4.webp'],
      ],
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur nobis autem ab est quam. Reiciendis soluta debitis voluptas est eaque, dolores facilis? Doloremque, laudantium neque aliquam enim inventore ab rerum magnam incidunt? Voluptatum, iure ratione! Vitae atque reprehenderit corrupti quibusdam, nulla excepturi tenetur perferendis enim, porro, quae officia similique dignissimos quod debitis sapiente! Temporibus quibusdam distinctio at a ad accusantium quae fugit fugiat blanditiis numquam dolores eum rerum ipsa dolor officia deserunt, ratione error similique reprehenderit dicta.'
    ),
    new Project(
      '5',
      'PSA',
      'Autres',
      '2020',
      'assets/img/portfolio/portfolio-5.jpg',
      '',
      [
        ['assets/img/projet1/pic1.webp', 'assets/img/projet1/pic2.webp'],
        ['assets/img/projet1/pic3.webp', 'assets/img/projet1/pic4.webp'],
      ],
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tenetur nobis autem ab est quam. Reiciendis soluta debitis voluptas est eaque, dolores facilis? Doloremque, laudantium neque aliquam enim inventore ab rerum magnam incidunt? Voluptatum, iure ratione! Vitae atque reprehenderit corrupti quibusdam, nulla excepturi tenetur perferendis enim, porro, quae officia similique dignissimos quod debitis sapiente! Temporibus quibusdam distinctio at a ad accusantium quae fugit fugiat blanditiis numquam dolores eum rerum ipsa dolor officia deserunt, ratione error similique reprehenderit dicta.'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
