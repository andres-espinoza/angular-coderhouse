import { capitalizeText } from 'src/utils/stringFormat';

interface StudentShape {
  name: string;
  lastName: string;
  age: number;
  isTopTen: boolean;
  getFullName(): string;
}

export class Student implements StudentShape {
  public readonly name: string;
  public readonly lastName: string;
  public readonly age: number;
  public isTopTen: boolean;

  constructor(
    _name: string,
    _lastName: string,
    _age: number,
    _isTopTen: boolean
  ) {
    this.name = capitalizeText(_name);
    this.lastName = capitalizeText(_lastName);
    this.age = _age;
    this.isTopTen = _isTopTen;
  }
  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}
