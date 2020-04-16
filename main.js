
// Программа запрашивает у пользователя значение из которого далее будет сформированна
// строка, состоящая из случайных символов (A-Z + 0-9)
// Далее у пользователя запрашивается символ, которым будут заменены все буквы в
// сформированной строке.
// Запрашивается второй символ, которым будут заменены все цифры в сформированной ранее строке
// Вся информация выводится на экран с помощью функции alert и для наглядности в консоль (console.log)
(function main() {
    'use strict';
    // возможные варианта символов
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // массив для записи случайно сформированной строки
    var arrNum = [];
    // запрос пользователю о длине строки
    var N = prompt('Сколько символов будет в строке?');
    // заполнить массив arrNum N символами
    fillArrWithRand(arrNum, N, possible);
    alert(arrNum.join(''));
    console.log('Полученная строка: ' + arrNum.join(''));
    // запрос пользователю на первый символ
    var firstCh = queryUserCh(possible);
    console.log('Первый символ: ' + firstCh);
    // замена в полученной строке всех букв, символом полученным от пользователя
    replaceWithFirstCh(arrNum, firstCh);
    console.log('Полученная строка: ' + arrNum.join(''));
    // запрос пользователю на второй символ
    var secondCh = queryUserCh(possible);
    console.log('Второй символ: ' + secondCh);
    // замена в изменённой строке всех цифр, символом полученным от пользователя
    replaceWithSecondCh(arrNum, secondCh);
    
    console.log('Полученная строка: ' + arrNum.join(''));
    alert(arrNum.join(''));
})();

// функция формирует elemNum случайных символов
// возможные значения символа : A-Z + 0-9
function fillArrWithRand(arr, elemNum, possibleVals) {
    for(var index = 0; index < elemNum; index++) {
        arr[index] = possibleVals.charAt(Math.floor(Math.random() * possibleVals.length));
    }
}

// функция запрашивает у пользователя ввод одного символа от A-Z или цифры от 0-9
function queryUserCh(possible) {
    var userCh = prompt('Введите ОДИН символ (символ от A-Z или цифра от 0-9)');
    // если произведена отмена ввода или введено пустое значени - повторный вызов функции
    if(userCh == '' || userCh == null || userCh == undefined) {
        alert('Давайте попробуем ещё раз');
        return queryUserCh(possible);
    }
    // если введено больше одного символа - повторный вызов функции
    if(userCh.length > 1) {
        alert('Слишком много символов, а нужен всего один');
        return queryUserCh(possible);
    }
    // если введён недопустимый символ - повторный вызов функции
    if(possible.includes(userCh)){
        return userCh;
    }
    else
        alert('Недопустимое значение символа!');
        alert('Возможные значения: символ от A-Z или цифра от 0-9');
        return queryUserCh(possible);
}
// заменить все буквы в массиве array символом char
function replaceWithFirstCh(array, char) {
    var replaceNum = 0;
    for(var index = 0; index < array.length; index++) {
        // является ли символ цифрой
        if(isNaN(array[index])) {
            replaceNum++;
            array[index] = char;
        }
        // пропустить, если попалась цифра
        else {
            continue;
        }
    }
    alert("Было произведено: " + replaceNum + ' замен');
}
// заменить все цифры в массиве array символом char
function replaceWithSecondCh(array, char) {
    var replaceNum = 0;
    for(var index = 0; index < array.length; index++) {
        // является ли символ цифрой
        if(!isNaN(array[index])) {
            replaceNum++;
            array[index] = char;
        }
        else {
            continue;
        }
    }
    alert("Было произведено: " + replaceNum + ' замен');
}


