export class Class {
  id: number;
  level: number;
  number: number;
  name: string;
}

export interface ClassQuery  {
  allStudents: Class[];
}
