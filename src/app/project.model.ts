export class Project {
  public id: string;
  public name: string;
  public customer: string;
  public year: string;
  public img: string;
  public banner: string;
  public book: string[][];
  public description: string;

  constructor(
    id: string,
    name: string,
    customer: string,
    year: string,
    img: string,
    banner: string,
    book: string[][],
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.customer = customer;
    this.year = year;
    this.img = img;
    this.banner = banner;
    this.book = book;
    this.description = description;
  }
}
