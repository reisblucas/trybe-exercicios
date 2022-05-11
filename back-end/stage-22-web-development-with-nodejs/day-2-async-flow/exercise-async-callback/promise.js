const numVerifier = (n) => typeof n !== 'number';

const oneChoiceThreeAnswers = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (numVerifier(a) || numVerifier(b) || numVerifier(c)) reject(new Error("Input only numbers!"));

    const calculate = (a + b) * c;
    if (calculate < 50) reject(Error("Sorry, lower value."))

    resolve(calculate);
  })

  console.log(promise);
  return promise;
}

// oneChoiceThreeAnswers("a", 2, 3);
// oneChoiceThreeAnswers(1, 2, 3);
oneChoiceThreeAnswers(20, 2, 3);

