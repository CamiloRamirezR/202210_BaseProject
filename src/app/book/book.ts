import { Editorial } from "../editorial/editorial";

export class Book {
  id: number;
  name: string;
  isbn: string;
  description: string;
  image: string;
  publishingdate: any;
  editorial: Editorial;

  constructor(
    id: number,
    name: string,
    isbn: string,
    description: string,
    image: string,
    publishindate: any,
    editorial: Editorial
  ) {
    this.id = id;
    this.name = name;
    this.isbn = isbn;
    this.description = description;
    this.image = image;
    this.publishingdate = publishindate;
    this.editorial = editorial;
  }
}
