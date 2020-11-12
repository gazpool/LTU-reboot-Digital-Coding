var temperature = 55;

if (temperature < 0 ) {
console.log('Stay inside');
} else if (temperature < 30) {
    console.log('Wear a coat and hat');
} else if (temperature < 50) {
    console.log('Wear a coat');
} else if (temperature > 55 && temperature === 55) {
    console.log('Temperature is 55, no need for a coat');
} else if (temperature > 55 || temperature === 55) {
    console.log('It is boiling, whack on some sun cream'); 
 } else {
        console.log('It is very hot, just pants is fine');
    }
