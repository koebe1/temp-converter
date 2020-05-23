const celsiusInput = document.querySelector('.celsius');
const fahrenheitInput = document.querySelector('.fahrenheit');
const kelvinInput = document.querySelector('.kelvin');


celsiusInput.addEventListener('input', () => {
    let celToFa = celsiusToFahrenheit(celsiusInput.value);
    let celToKel = celsiusToKelvin(celsiusInput.value);
    fahrenheitInput.placeholder = celToFa;
    kelvinInput.placeholder = celToKel;
});

fahrenheitInput.addEventListener('input', () => {
    let faToCel = fahrenheitToCelsius(fahrenheitInput.value);
    let faToKel = fahrenheitToKelvin(fahrenheitInput.value);
    celsiusInput.placeholder = faToCel;
    kelvinInput.placeholder  = faToKel;
});

kelvinInput.addEventListener('input', () => {
    let kelToCel = kelvinToCelsius(kelvinInput.value);
    let kelToFa = kelvinToFahrenheit(kelvinInput.value);
    celsiusInput.placeholder = kelToCel;
    fahrenheitInput.placeholder = kelToFa;
});








// converting formulas
const celsiusToFahrenheit = (cel) => {
    return Math.round((((parseInt(cel) * 9 / 5) + 32) + Number.EPSILON) *100) /100;
}

const celsiusToKelvin = (cel) => {
    return Math.round(((parseInt(cel) + 273.15) + Number.EPSILON) *100) /100;
}

const kelvinToCelsius = (kel) => {
    return Math.round(((parseInt(kel) - 273.15) + Number.EPSILON) *100) /100;
}

const kelvinToFahrenheit = (kel) => {
    return Math.round((((parseInt(kel) - 273.15) * 9 / 5 + 32) + Number.EPSILON) *100) /100;
}

const fahrenheitToCelsius = (fa) => {
    return Math.round((((parseInt(fa)-32) * 5/9) + Number.EPSILON) *100) /100;
}

const fahrenheitToKelvin = (fa) => {
    return Math.round((((parseInt(fa)-32) * 5/9 + 273.15) + Number.EPSILON) *100) /100;
}

