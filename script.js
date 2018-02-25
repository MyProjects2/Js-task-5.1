'use strict'
//forEach
var userInput = prompt('Напишите любое слово');
function countVowels(string) {
    var str = 'аеёиоуыэюяАЕЁИОУЭЮЯ';
    var array = string.split('');
    var count = 0;
    function checkVowels(el){
        if (str.indexOf(el) !== -1){
            count +=1;
        }
    }
    array.forEach(checkVowels);
    return count;
}
alert( 'Количество гласных букв в слове: ' + countVowels(userInput));


























//var array = userInput.split('');
// for(var i = 0; i< vowels.length; i++){
//     var pos = 0;
//     var arr = [];
//     while (true) {
//         var found = array.indexOf(vowels[i], pos);
//         if (found == -1) break;
//         alert(found);
//         arr.push(pos);
//         console.log(arr);
//         pos = found +1;
//     }
// }
//console.log(array);
