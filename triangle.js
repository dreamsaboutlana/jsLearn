function paintTriangle(height, symbol) {
  for (let i = 0; i < height; i++) {
    let output = symbol;
    for (let j = 0; j < i; j++) {
      output += symbol;
    }
    console.log(output);
  }
}

// paintTriangle(7, '#');
//*      
//**     
//***    
//****   
//*****  
//****** 
//*******


function paintReapeatTriangle(height, symbol) {
  for (let i = 1; i <= height; i++) {
    console.log(symbol.repeat(i));
  }
}
// paintReapeatTriangle(5, "%");
// %
// %%
// %%%
// %%%%
// %%%%%

function paintTriangleWithSpace(height, symbol1, symbol2) {
  for (let i = height - 1; i >= 0; i--) {
    console.log(symbol1.repeat(i) + symbol2.repeat(height - i));
  }
}
// console.log(paintTriangleWithSpace(5,' ', '*'));
//     *
//    **
//   ***
//  ****
// *****


function paintNewTriangle(height, symbol1, symbol2) {
  for (let i = height - 1; i >= 0; i--) {
    let newSymbol1 = symbol1.repeat(i);
    let index = height - i;
    console.log(newSymbol1 + symbol2.repeat(index) + symbol2.repeat(index - 1) + newSymbol1);
  }
}
// paintNewTriangle(10, ' ', '*');

//          *         
//         ***        
//        *****       
//       *******      
//      *********     
//     ***********    
//    *************   
//   ***************  
//  ***************** 
// *******************
