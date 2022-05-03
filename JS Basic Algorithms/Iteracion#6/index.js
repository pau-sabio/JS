//1.1//

for (var i = 0; i <= 9; i++) {
    var number = i;
    console.log(number);
}

//1.2//

for (var j = 0; j <= 9; j++) {
    const number2 = [j];
    if (j/2 == 0)
    console.log(number2);
}

//1.3//

for (let ovejas = 0; ovejas < 10; ovejas++) {

    const imprimir = "Intentando dormir";
    const imprimir2 = "Dormido";

    if (ovejas < 9) {
        console.log(imprimir);
    }
    
    else if (ovejas == 9) {
        console.log(imprimir2);
    }
}
