// игра "введи число" 
//функция с возможностью ввести число которое нужно найти и количество попцток
// с обратным и прямым отсчетом попыток
function playGame(fNumber, allTry){
  var nTry = 0;
  for ( ; allTry ; ){
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
}