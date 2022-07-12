import { IPerson } from "../interfaces/IPerson";

class Person {
  constructor(
    public name: string, private birthDate: string
    ) {
      if (name.length < 4) {
        throw "O nome deve ter no mínimo três caracteres"
      }
      this.name = name;

      const bdTime = new Date(Date.parse(this.birthDate)).getTime();
      console.log('bdTime', bdTime);
      console.log('Date noew', Date.now());
      
      if (isNaN(bdTime)) {
        throw "Não é um número"
      }

      if ((bdTime - Date.now()) < 0) {
        throw "Data anterior a 01/01/1970"
      }

      const isFutureDate = bdTime > Date.now();
      if (isFutureDate) {
        throw "A data de nascimento não pode ser uma data no futuro"
      }

      const age = Math.abs(Date.now() - bdTime);
      const ageIsLesserThan120 = Math.floor(age / (1000 * 3600 * 24)) / 365.25;
      if (ageIsLesserThan120) {
        throw "A pessoa não pode possuir mais de 120 anos";
      }
      this.birthDate = birthDate;
    }
}

export default Person;
