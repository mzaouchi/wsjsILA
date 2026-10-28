var a = 5
console.log(a)
console.log(typeof(a))

var name = "Louay"

console.log(name)

var result = typeof(name)

console.log(result)

var b = "5"

console.log(typeof(b))

var x = false

console.log(x)

console.log(typeof(x))


var x = [2, 77, 55,33,9]

console.log(x)

console.log(x[3])

console.log(x.length)

console.log(typeof(x))

var user = {name : "Louay", age : 24, city : "Tunis"}

// console.log(user)

// console.log(user.age)
// console.log(user.city)

// console.log(Object.keys(user))

// console.log(Object.values(user))

console.log(Object.entries(user))

console.log(typeof(user))


var y

console.log(typeof(y))

var q = null

console.log(typeof(q))

var a = 5
var b = 2

console.log(a + b)

console.log(a - b )

console.log(a / b)

console.log(a % b)

a++

console.log(a)

a = a + 1

console.log(a)

a-- 

console.log(a)

a = a - 3

console.log(a)

 a += 2

 console.log(a) 

 a = a + 2

 console.log(a)

 a -= 4

 console.log(a)



 var a = 5
var b = 6
var c = "5"

console.log(a != b)

console.log(a != c)

console.log(a !== b)

console.log(a !== c)

// console.log(a == b)

// console.log(a == c)

// console.log(a === b)

// console.log(a === c)


var a = 5
var b = 6
var c = "5"

console.log(a < b)
console.log(a > b)
console.log(a >= c)


var a = 5
var b = 6
var c = "5"

console.log(a < b && a > b )
console.log(a < b || a > b )

var age = 30

if(age < 18){
  console.log("Mineur")
}else if( age < 60){
  console.log("Adulte")
}else{
  console.log("Vieux")
}

var num = 21


if(num % 2 == 0){
  console.log("Paire")
}else{
  console.log("Unpaire")
}

var stal = 0

for(var i =  1; i <= 10; i++){
  stal = stal + i
}

console.log(stal)

var t= [22,66,888,5,2]

var somme = 0

for(var i = 0; i < 5; i++){
  somme = somme + t[i]
}

console.log(somme)

var t= [22,66,888,5,2]

// for(var i in t){
//   console.log(t[i])
// }

// for(var eddy of t){
//   console.log(eddy)
// }