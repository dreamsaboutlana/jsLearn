function chessBoard(symbol1, symbol2, height = 8) {
  for (let i = 0; i < height; i++) {
    if (i % 2) {
      console.log((symbol1 + symbol2).repeat(height/2));
    } else {
      console.log((symbol2 + symbol1).repeat(height/2));
    }
  }
}
chessBoard("%", " ");
//  % % % %
// % % % % 
//  % % % %
// % % % % 
//  % % % %
// % % % % 
//  % % % %
// % % % % 