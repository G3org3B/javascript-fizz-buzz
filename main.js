

// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz



// variabili

var numeri = 1;
var numerod3 = 3;
var numerod5 = 5;

// Creare stampa numeri 1-100

while (numeri <= 100) {
  //console.log(numeri);

  // Se i numeri sono multipli sia di 3 che di 5 stampa FIZZBUZZ

  if (numeri % numerod5 == 0 && numeri % numerod3 == 0) {

    var fizzBuzz= document.writeln("<br>" + "fizzBuzz");
    //console.log(fizzBuzz);
  }

  // Se i numeri sono multipli di 3 stampa FIZZ

  else if (numeri % numerod3 == 0) {

    var fizz = document.writeln("<br>" + "fizz");
    //console.log(fizz);
  }

  // Se i numeri sono multipli di 5 stampa BUZZ

  else if (numeri % numerod5 == 0) {

    var buzz= document.writeln("<br>" + "buzz");
    //console.log(buzz);
  }

  else {
    document.writeln("<div>" + numeri );
    //console.log(numeri);
  }

  numeri = numeri + 1;

}
