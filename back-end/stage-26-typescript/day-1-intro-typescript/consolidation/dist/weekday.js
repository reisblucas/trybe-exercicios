"use strict";
var EWeekDay;
(function (EWeekDay) {
    EWeekDay["seg"] = "Segunda-Feira";
    EWeekDay["ter"] = "Ter\u00E7a-Feira";
    EWeekDay["qua"] = "Quarta-Feira";
    EWeekDay["qui"] = "Quinta-Feira";
    EWeekDay["sex"] = "Sexta-Feira";
    EWeekDay["sab"] = "S\u00E1bado";
    EWeekDay["dom"] = "Domingo";
})(EWeekDay || (EWeekDay = {}));
const weekdayKeys = Object.keys(EWeekDay);
let weekday;
for (let i = 1; i <= weekdayKeys.length; i += 1) {
    const actualPosition = weekdayKeys[i - 1];
    weekday = EWeekDay[actualPosition];
    console.log(`${i} - Weekday:`, weekday);
}
