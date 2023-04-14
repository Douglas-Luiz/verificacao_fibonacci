let i = prompt("Digite o numero que quer verifica ?")
function sequencia(x){
    let n = parseInt(Math.sqrt(x));
    return ( n * n == x)

}
function fibonacci(n){
    return sequencia(5 * n * n + 4) || sequencia(5 * n * n - 4);
}

    fibonacci(i)?  console.log( i + " Ele é um numero da sequencia de Fibonacci "):
                    console.log(i + " Ele não é um numero da sequencia de Fibonacci")