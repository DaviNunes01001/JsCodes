const celsiusParaFahrenheit = require('./3.js');

const valoresCelsius = [25, 30, 100];

valoresCelsius.forEach(c => {
  const f = celsiusParaFahrenheit(c);
  console.log(`${c}°C = ${f}°F`);
});
