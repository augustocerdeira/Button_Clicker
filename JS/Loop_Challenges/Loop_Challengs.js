//Print odds 1-20
//Using a loop write code that will console.log all of the odd values from 1 up to 20.

for(var i = 1; i<21; i++){
    if(i % 2 !=0){
    console.log(i)
    }
}

//Decreasing Multiples of 3
//Using a loop write code that will console.log 
//all of the values that are evenly divisible by 3 from 100 down to 0.

for(var i = 100; i >0; i--){
    if(i % 3 ==0){
        console.log(i)
    }
}

//Print the sequence
//Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

for(var i = 4; i > -4; i -= 1.5)
console.log(i)

//sigma
//Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log 
//the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

for(var i = 1; i <101; i++){
    for(var sum = i; sum +=i;){
    }
}
console.log(sum)