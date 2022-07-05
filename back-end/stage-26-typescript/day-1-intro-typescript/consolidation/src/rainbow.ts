enum ERainbow {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Indigo,
  Violet,
}

const rainbowKeys = Object.keys(ERainbow);
console.log(rainbowKeys);

let rainbowColor: number;

for(let i = 0; i < rainbowKeys.length; i += 1) {
  const actualPosition = rainbowKeys[i];

  rainbowColor = ERainbow[actualPosition as keyof typeof ERainbow];
  console.log(`Rainbow color:`,  rainbowColor);
}