/*console.log("hello")
let A = [12,4,3,10,1,20]
let B = [-3, -7, -100, -33]
let C = A.concat(B)
console.log(A,B)
console.log(C)
console.log("\n\n")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let a = [12,4,3,10,1,20]
let max = a.indexOf(Math.max(12,4,3,10,1,20))
let min = a.indexOf(Math.min(12,4,3,10,1,20))
console.log(a)
a.splice(max)
a.splice(min)
console.log(a)
console.log("\n\n")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let S = 0
str1= prompt('Введите число');
for( let i=0; i<str1.length; ++i)
{
    S += (str1.charCodeAt(i) - 48);
}
console.log(str1, "\nСумма цифр числа:", S)

console.log("\n\n")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


str = "Goodbye America"
console.log(str)
symb = 'e'
regexp = new RegExp(`${symb}`, 'g')
str2=str.replace(regexp,symb+symb)
console.log(str2)
console.log("\n\n")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let regexp1 = /\!|\#|\%|\$/
let regexp2 = /[0-9]/g
let regexp3 = /[A-Z]/
let regexp4 = /[a-z]/
let flag = 0
while (true)
{
str1 = prompt("Введите пароль")
    while (true)
    {
        if (str1.length < 9)
        {
            alert("Пароль должен состоять минимум из 8 символов")
            break
        }
        else if (str1.search(regexp1) == -1)
        {
            alert("Пароль должен содержать один из неалфавитных символов (например, !, $, #, %).")
            break
        }
        else if ((result = str1.match(regexp2)).length < 2)
        {
            alert("Пароль должен содержать более двух цифр")
            break
        }
        else if ( (str1.search(regexp3) == -1) || (str1.search(regexp4) == -1) )
        {
            alert("Пароль должен содержать минимум по одной английской букве каждого регистра")
            break
        }
        else
        {
            alert("Пароль сохранён")
            flag = 1
            break
        }
    }
if (flag == 1)
    break
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let str2 = prompt("Введите строку: ")
let str1 = "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье"
let flag = 0;
result = str1.split(' ')
console.log(result)
for (let i = 0; i < result.length;i++)
{
    for (let j = 0; j < result[i].length;j++)
    {
	    if ((result[i].slice(0,j) == str2.slice(0,j)) && (result[i].slice(j+1) == str2.slice(j+1)))
	    {
			    flag = 1
			    console.log("Найдено: ", result[i])
			    alert(`Найдено: ${result[i]}`)
        break
	    }
    }
    if (flag == 1)
        break
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Sravnen(mas1,mas2)
{
    if (mas1.join() == mas2.join())
    	console.log("Массивы равны")
	else
    console.log("Массивы не равны")
}

let A = [1,2,3,4,7,8,9]
let B = [1,2,3,4,7,8,9]
console.log(A,B)
Sravnen(A,B)
let C = [1,2,3,4,7,8,9]
let D = [1,2,0,4,7,8,9]
console.log(C,D)
Sravnen(C,D)
let E = [[1,2],[3,4]]
let R = [[1,2],[3,4]]
console.log(E,R)
Sravnen(E,R)

let U = [[1,2],[3,4]]
let Y = [[1,2],[0,4]]
console.log(U,Y)
Sravnen(U,Y)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function range(start, end, some)
{
let step = some
let a = []
let i = start
if(some == undefined)
	step = 1
while(i <= end)
{
	a.push(i)
	i += step
}
return a;
}
a = range(1,10,2)
console.log(a)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function info(Stdnt,StdntName)
{
    let result = "";
	for (let i in Stdnt)
    {
    	if(Stdnt.hasOwnProperty(i))
    	{
	    	result += StdntName + "." + i + " = " + Stdnt[i] + "\n"
    	}
    }
	return(result)
}

var Student1 = new Object();
Student1.name = "Даниил"
Student1.surname = "Голота"
Student1.age = 22
Student1.interests = ["Музыка", "Кино", "Путешествия"]
Student1.studyPlace = "ГУАП"
alert(info(Student1, "Student1"))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function foo(obj, method, cnt)
{
mas = []

cnt2 = 0
for (i = 0; i<cnt; i++)
{
	mas[i] = []
	j = 0
	for ([key, value] of Object.entries(obj))
	 {
		if(key == method)
			value = i
		mas[i][j] = `${key}: ${value}`
		cnt2 += 1
		j+=1
	}
}
console.log(mas)
}

let a = {
	name: 'static',
	count: 0
}
console.log(foo(a,'count', 10))


function getRandomInt(min, max, mas)
{
	num = Math.floor(Math.random() * (max - min)) + min;
	while(mas.indexOf(num) != -1 )
	{
  num = Math.floor(Math.random() * (max - min)) + min;
	}
  function checkNumber()
	{
			mas.push(num)
			console.log("Сгенерированное число:", num)
			console.log(mas)
  }
  return checkNumber
}

massiv = []
for(i = 0; i < 111; i++)
{
	if(massiv.length == 100)
	{
		massiv = []
	}
	number = getRandomInt(1, 101, massiv);
	console.log(number())
}


let Student1 = {
name: "Даниил",
surname: "Голота",
age: 22,
interests: ["Музыка", "Кино", "Путешествия"],
studyPlace: "ГУАП",
info:  function() {
	console.log(this.name + " " + this.surname + ". " + this.age + "года. Интересы: "+this.interests + ". Учиться в " + this.studyPlace + ".")
}
};
Student1.info()


function factorial(n)
	{
	if(n != 1)
	{
		result = n * factorial(n - 1)
	}
	else
	{
		result = 1
	}
	return result
	}

	console.log("Факториал %s (%s!) = ", a = prompt("Введите число"), a,  factorial(a));
	*/



	let arr = [
	{'price' : 10,	'count' : 2 },
	{'price' : 5,		'count' : 5},
	{'price' : 8, 	'count' : 5 },
	{'price' : 12,	'count' : 4 },
	{'price' :8, 		'count' : 4},]

	arr.sort(function( a, b ) {return a.price - b.price})
	console.log("После сортировки: ", arr)
