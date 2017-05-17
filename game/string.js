// Найти слово, стоящее в тексте под определенным номером, и вывести его первую букву
var wordnum;
var str = "We bild all day day by themselves";
function findLetterInWord(str, num){
  return str.split(" ")[num][0].toUpperCase();
}

function findWord(str, num){
	return str.split(' ')[num];
}

function findSymbol(str, num){
  return str.charAt(num);
}
var Arr = [1, 209, 403, 134, 365, 46, 73, 81, 96, 100];
var max = Arr[0], min = Arr[0], n = Arr.length;
	for(var i = 0; i < n; i++){
		if(Arr[i] > max){
			max = Arr[i];

		} else if (Arr[i] <= min){
			min = Arr[i];
		}
	}
console.log(min);
console.log(max);

var str = "We bild all day h day by themselves";
var newStr = str.split(' ');
var min = newStr[0].length;
var max = newStr[0].length;
var n = newStr.length;
for (var i = 0; i < n; i++){
	if (newStr[i].length > max){
		max = newStr[i].length;
	}else if (newStr[i].length <= min){
		min = newStr[i].length;
	}
}
console.log(min);
console.log(max);

function findMaxAndMin(str){
	var str = "We bild all day h day by themselves";
	var newStr = str.split(' ');
	var min = newStr[0].length;
	var max = newStr[0].length;
	var minWord = newStr[0];
	var maxWord = newStr[0];
	var n = newStr.length;
	for (var i = 0; i < n; i++){
		if (newStr[i].length > max){
			max = newStr[i].length;
			maxWord = newStr[i];
		}else if (newStr[i].length <= min){
			min = newStr[i].length;
			minWord = newStr[i];
		}
	}
	return ("Короткое слово: " + minWord + ",Длинное слово: " + maxWord);
}
findMaxAndMin(str);

var str = "We bild all day and holiday by themselves";
function deleteChortWord(str, lg){
	var newStr = str.split(' '),
		n = newStr.length, 
		newStrWord = "";
	for(var i = 0; i < n; i++){
		if (newStr[i].length > lg){
			newStrWord += newStr[i] + " ";
		} 
	}
	return newStrWord;
}
deleteChortWord(str, 5);

var str = "U bild all day and holiday by themselves";
function reverseStr(srt){
	return str.split("").reverse().join("");
}
reverseStr(str);

var str = "U bild all day and holiday by themselves";
function chengePlace(str){
	var newStr = str.split(" "),
		n = newStr.length,
		min = newStr[0].length,
		max = newStr[0].length;
	for (var i = 0; i < n; i++){
		if (newStr[i].length > max){
			max = i;
		}else if (newStr[i].length <= min){
			min = i;
		}
	}
	var newMax = newStr[max];
	newStr[max] = newStr[min];
	newStr[min] = newMax;
	return newStr;
}
chengePlace(str);

var str = "U!! bild all day and holiday by 2000 themselves!!!";
function deleteSymbol(str){
var newStr = "";
	for (var i = 0; i < str.length; i++){

		if(str[i].indexOf("!") == -1){
			newStr +=str[i];
		}
	}
		return newStr;
}
deleteSymbol(str);

// калькулятор start
var numbers = [];
while(true){
	var value = prompt('Number?', 0);
	if (value === "" || value === null || isNaN(value)) break;
	numbers.push(+value);
}
var sum = 0;
for (var i = 0; i < numbers.length; i++){
	sum += numbers[i];
}
console.log(sum);
// калькулятор end

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
function deleteAnagram(arr){
	var obj = {};
	for (var i = 0; i < arr.length; i++){
		var sortWord = arr[i]
			.toUpperCase()
			.split('')
			.sort()
			.join();
		obj[sortWord] = arr[i];
		// console.log(obj);
	}
	var result = [];
	for (var key in obj)result.push(obj[key]);
		return result;
}
deleteAnagram(arr);