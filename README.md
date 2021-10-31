Практическое задание 1
-----------------------------------
### Задание 1.1
    Заданы два массива A = [ 12, 4, 3, 10, 1, 20 ], B = [-3, -7, -100, -33].
    Необходимо их объединить в один массив C добавив массив B в конец(в начало) A.
### Решение

    console.log("hello")  
    let A = [12,4,3,10,1,20]  
    let B = [-3, -7, -100, -33]  
    let C = A.concat(B)  
    console.log(A,B)  
    console.log(C)
-----------------------------------

### Задание 1.3
    Задан массив - [12,4,3,10,1,20]. Удалить из него наименьшее и наибольшее значение.
### Решение
    let a = [12,4,3,10,1,20]  
    let max = a.indexOf(Math.max(12,4,3,10,1,20))  
    let min = a.indexOf(Math.min(12,4,3,10,1,20))  
    console.log(a)  
    a.splice(max)  
    a.splice(min)  
    console.log(a)  

-----------------------------------

### Задание 2.1
    Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
### Решение
    let S = 0  
    str1= prompt('Введите число')  
    for( let i=0; i<str1.length; ++i)  
    {  
        S += (str1.charCodeAt(i) - 48)  
    }  
    console.log(str1, "\nСумма цифр числа:", S)  

-----------------------------------

### Задание 2.2
    Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
### Решение
    str = "Goodbye America"  
    console.log(str)  
    symb = 'e'  
    regexp = new RegExp(`${symb}`, 'g')  
    str2=str.replace(regexp,symb+symb)  
    console.log(str2)  

-----------------------------------

### Задание 2.3
    Проверить что введенный пароль удовлетворяет  
    следующим условиям сложности:  
    - длинна от 9 символов;  
    - содержит обязательно английские буквы верхнего и нижнего регистра;  
    - содержит более двух цифр;  
    - содержит обязательно один из неалфавитных символов (например, !, $, #, %).  

### Решение
    let regexp1 = /\\!|\\#|\\%|\\$/  
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

-----------------------------------

### Задание 2.4
    Нечёткий поиск:  
    Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье". Пользователь  
    вводит слово из словаря с одной перепутанной буквой, например: "Срида". Написать программу, которая позволяет с  
    использованием регулярного выражения найти в строке-словаре введённое пользователем слово (не смотря на одну  
    ошибку в слове) и вывести исправленное слово пользователю, например: "Среда".  
### Решение
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

-----------------------------------

### Задание 3.1
    Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и
    возвращает true, если массивы равны и false, если не равны. Массивы сравниваются поэлементно.
### Решение
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

-----------------------------------

### Задание 3.2
    Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, третий
    аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива. Функция
    возвращает массив, который содержит все числа из него, включая начальное и конечное. Например, вызов
    функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].

### Решение
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
  
-----------------------------------

### Задание 3.3
    Построить объект студент со свойствами: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
    Написать отдельную функцию, которой передается объект студент, а она выводит его содержимое.

### Решение
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
    
 -----------------------------------

### Задание 4.1
    Реализовать функцию foo:
    let a = {
    name: 'static',
    count: 0
    }
    console.log(foo(a, 'count', 10)); /*
    В консоль выведет:
    [{name:'static', count:0}, {name:'static', count:1}, ...,
    {name:'static', count:9}] */

### Решение
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
    
-----------------------------------

### Задание 4.2
    Сделайте функцию, каждый вызов который будет
    генерировать одно случайное число от 1 до 100, но
    так, чтобы оно не повторялось, пока не будут
    перебраны все числа из этого промежутка. Решите
    задачу через замыкания - в замыкании должен
    хранится массив чисел, которые уже были
    сгенерированы функцией.

### Решение
    function getRandomInt(min, max, mas)
    {
    num = Math.floor(Math.random() * (max - min)) + min
    while(mas.indexOf(num) != -1 )
    {
      num = Math.floor(Math.random() * (max - min)) + min
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
    	number = getRandomInt(1, 101, massiv)
    	console.log(number())
    }
    
 -----------------------------------

### Задание 4.1
    Построить объект студент:
	- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
	- метод объекта выводящий в консоль
	биографическую справку в виде, например:
	«Иван Петров. 21 год. Интересы: программирование,
	музыка, аниме. Учится в ГУАП

### Решение
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
