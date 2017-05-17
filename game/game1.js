// игра "введи число" с 10 попытками ввода числа
// с обратным и прямым отсчетом попыток

var nTry = 0;
var fNumber = 117, allTry = 10;
for (var allTry = 10;allTry ; ){
	nTry +=1;
	allTry -=1;
	var userNumber = prompt('Введи число?', '');
	if(!userNumber)break;
	
	if (isNaN(userNumber) || userNumber == ''){
		alert('Должно быть число, попробуй еще раз.Ты сделал' 
			+' '+ nTry+ ' '+'попытки. Осталось' 
			+ ' ' + allTry + ' ' + 'попытки');
	} else if (userNumber == fNumber){
		alert("Угадал за"+ " " + nTry + " " + " раз");
		break;
	} else if(userNumber > fNumber){
		alert('Число должно быть меньше.Ты сделал'
		 +' '+ nTry+ ' '+'попытки. Осталось '
		 + ' ' + allTry + ' ' + 'попытки');
	} else{
		alert('Число должно быть больше.Ты сделал'
		 +' '+ nTry+ ' '+'попытки. Осталось '
		 + ' ' + allTry + ' ' + 'попытки');
	}
}
if(allTry == 0){
	alert('Ты проиграл, попробуй снова');
}