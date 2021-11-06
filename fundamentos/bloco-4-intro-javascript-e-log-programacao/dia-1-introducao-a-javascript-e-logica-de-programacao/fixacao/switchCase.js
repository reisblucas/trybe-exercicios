let resultado;

const grade = 101;

if (grade >= 80 && grade <= 100) {
    resultado = 1;
} else if (grade >= 60 && grade < 80) {
    resultado = 0;
} else if (grade >= 0 && grade < 60) {
    resultado = -1;
} else {
    resultado = -2;
}

switch (resultado) {
    case 1 :
        console.log('Aprovado');
        break
    case -1 :
        console.log('Reprovado');
        break
    case 0 :
        console.log('Lista');
        break
    default:
        console.log('Não se aplica.');
        break
}