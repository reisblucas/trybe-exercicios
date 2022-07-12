interface IStudent {
  matricula: number;
  name: string;
  p1: number;
  p2: number;
  p3: number;
  p4: number;
  t1: number;
  t2: number;
}

export default class Student {
  private matricula: number;
  private name: string;
  private p1: number;
  private p2: number;
  private p3: number;
  private p4: number;
  private t1: number;
  private t2: number;

  constructor(m: number, n: string) {
    this.matricula = m;
    this.name = n;
    this.p1 = 0;
    this.p2 = 0;
    this.p3 = 0;
    this.p4 = 0;
    this.t1 = 0;
    this.t2 = 0;
  }

  public addP1Grade = (p1g: number) => {
    if (!this.p1) {
      this.p1 = p1g;
    }
  }

  public addP2Grade = (p2g: number) => {
    if (!this.p2) {
      this.p2 = p2g;
    }
  }

  public addP3Grade = (p3g: number) => {
    if (!this.p3) {
      this.p3 = p3g;
    }
  }

  public addP4Grade = (p4g: number) => {
    if (!this.p4) {
      this.p4 = p4g;
    }
  }

  public addT1Grade = (t1g: number) => {
    if (!this.t1) {
      this.t1 = t1g;
    }
  }

  public addT2Grade = (t2g: number) => {
    if (!this.t2) {
      this.t2 = t2g;
    }
  }

  public getGrades = () => {
    console.log(`Grades of ${this.name}:\nP1: ${this.p1}\nP2: ${this.p2}\nP3: ${this.p3}\nP4: ${this.p4}\nT1: ${this.t1}\nT2: ${this.t2}`);
  }

  public getTestAverageGrade = () => {
    const average = (this.p1 + this.p2 + this.p3 + this.p4) / 4;
    console.log(`Test avg: ${average}`);
  }

  public getHomeworkAverageGrade = () => {
    const average = (this.t1 + this.t2) / 2;
    console.log(`Homework avg: ${average}`);
  }
}

const pedrin = new Student(1, 'Pedrin');
pedrin.addP1Grade(1);
pedrin.addP2Grade(5);
pedrin.addP3Grade(8);
pedrin.addP4Grade(8);
pedrin.addT1Grade(3);
pedrin.addT2Grade(5.7);
pedrin.getGrades();
pedrin.getTestAverageGrade();
pedrin.getHomeworkAverageGrade();
