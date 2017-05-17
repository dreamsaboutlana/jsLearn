var nTry = 0;
var fNumber = 117;
for (; ;){
	var userNumber = prompt('Введи число?', '');

	console.log(userNumber);
	if(!userNumber)break;

	nTry += 1;
	if (isNaN(userNumber) || userNumber == ''){
		alert("Должно быть число, попробуй еще раз" + ' ' + nTry + ' ' + 'попытки');
	} else{
		if (userNumber == fNumber){
			alert("Угадал за"+ " " + nTry + " " + " раз");
			break;
		} else{
			if(userNumber > fNumber){
				alert('Число должно быть меньше. Вы совершили ' + ' ' + nTry + ' ' + 'попытки');
			} else{
				alert('Число должно быть больше. Вы совершили ' + ' ' + nTry + ' ' + 'попытки');
			}
		}
	}
}