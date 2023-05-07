

function stairCase(n){
/*       n = 4 } numspace  / numsymbols
    	---#        3             1
        --##        2             2
        -###        3             1
        ####        0             4             

*/
let symbol = '#'
let inputLine = ''
let inputPostion = n - 1

for (let lineIndex = 0; lineIndex < n ; lineIndex ++){
    inputLine = ''


    for (let columIndex = 0;columIndex < n; columIndex ++){
      if (columIndex < inputPostion){
        inputLine += ' '
      }else {
        inputLine += symbol
        
      }
}
console.log(inputLine)
inputPostion--
}
}
stairCase(12)