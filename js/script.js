const numberRegex = /^[0-9]+$/;
const inputFieldCelcius = document.getElementById("inputField");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById('resetBtn');
const rumusKonversi = document.getElementById('rumusKonversi');

// Mengosongkan nilai input

resetBtn.addEventListener('click', function() {
inputFieldCelcius.value = ``;
rumusKonversi.textContent = ``;
result.textContent = '';

});

//agar tidak bisa menulis huruf

inputFieldCelcius.addEventListener('keypress', function(event){  
    if(!numberRegex.test(event.key)){
        event.preventDefault()
    }
})
// fungsi button convert

convertBtn.addEventListener('click', function() {
    const inputField = document.getElementById('inputField').value;
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (inputField === '') {
        result.textContent = 'Input Suhu awal terlebih dahulu.';
        return;
      }

//rumus dari celcius ke fahrenheit dan sebaliknya

    if (selectedUnit === 'celsius') {
      const tempInCelsius = parseFloat(inputField);
      const tempInFahrenheit = (tempInCelsius * 9/5) + 32;
      result.textContent = `${tempInFahrenheit}°F`;
      rumusKonversi.textContent = `${inputField}°C x 9/5 + 32 = ${tempInFahrenheit}°F`; 
    //   Fahrenheit = (Celsius × 9/5) + 32

    } else if (selectedUnit === 'fahrenheit') {
      const tempInFahrenheit = parseFloat(inputField);
      const tempInCelsius = (tempInFahrenheit - 32) * 5/9;
      result.textContent = `${tempInCelsius}°C`;
      rumusKonversi.textContent = `5/9 x (${inputField}°F-32) = ${tempInCelsius}°C` ;

      // Celcius = 5/9 (F-32)
    }
  });

  


