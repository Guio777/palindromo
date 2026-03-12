function ELpalindromo(num){
    let original = num;
    let reverse = 0;
    
    while(num > 0){
    let lastdigit = num % 10;
    reverse = (reverse * 10) + lastdigit;
    num = (num - lastdigit)/10;
    
    }
    return original == reverse;
}
console.log(ELpalindromo(123));
console.log(ELpalindromo(121));