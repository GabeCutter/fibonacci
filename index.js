var phi = (1 + Math.sqrt(5))/2;
var counter = 0;

//document.write(phi);

function fibonacci(n) {
    return ((Math.pow(phi, n) - Math.pow(-phi, -n))/(2*phi-1));
}

//function loop 0-500
document.write("The Fibonacci Sequence from 0 - 500<br>")
while(1 == 1) {
    document.write(Math.round(fibonacci(counter)) +"<br>")
    if(fibonacci(counter+1) > 500)
        break;
    counter++;
}
