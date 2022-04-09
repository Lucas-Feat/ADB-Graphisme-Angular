export class Project {
  public id: string;
  public name: string;
  public customer: string;
  public img: string;

  constructor(id: string, name: string, customer: string, img: string) {
    this.id = id;
    this.name = name;
    this.customer = customer;
    this.img = img;
  }
}
