function factor(number){
  var factor = []

  for (var i = number; i > 0; i--){

    if (number % i == 0){
      factor.push(i)
    }

  }
  return factor
}


function gcd (firstNumber, secondNumber) {
  var length = factor(firstNumber)

  for (var n =  0; n < length.length; n++){
    if (secondNumber % length[n] == 0){
      return length[n]
    }
  }

}

// TEST CASES
console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(50, 1)); // 1