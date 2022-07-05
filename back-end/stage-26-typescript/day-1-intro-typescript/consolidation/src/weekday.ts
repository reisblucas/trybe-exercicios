enum EWeekDay {
  seg = 'Segunda-Feira',
  ter = 'Terça-Feira',
  qua = 'Quarta-Feira',
  qui = 'Quinta-Feira',
  sex = 'Sexta-Feira',
  sab = 'Sábado',
  dom = 'Domingo',
}

const weekdayKeys = Object.keys(EWeekDay);
let weekday: string;

for(let i = 1; i <= weekdayKeys.length; i += 1) {
  const actualPosition = weekdayKeys[i - 1];

  weekday = EWeekDay[actualPosition as keyof typeof EWeekDay];
  console.log(`${i} - Weekday:`, weekday);
}
