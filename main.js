
// 5

function weekFn(n) {
    var day = '';
    switch(n) {
        case 1: day = 'Понедельник';
            break;
        case 2: day = 'Вторник';
            break;
        case 3: day = 'Среда';
            break;
        case 4: day = 'Четверг';
            break;
        case 5: day = 'Пятница';
            break;
        case 6: day = 'Суббота';
            break;
        case 7: day = 'Воскресенье';
            break;
        default: day = 'null';
    }
    return day
}
console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(3));
console.log(weekFn(4));
console.log(weekFn(5));
console.log(weekFn(6));
console.log(weekFn(7));
console.log(weekFn(8));


// 6
function ageClassification(n) {
    return (n<=24) ? 'детский возраст' : 
    (n < 45) ? 'молодой человек' :
    (n < 61) ? 'средний возраст' :
    (n < 76) ? 'пожилой возраст' :
    (n < 91) ? 'старческий возраст' :
    (n < 123) ? 'долгожители' : null; 
}
console.log(ageClassification(20));
console.log(ageClassification(40));
console.log(ageClassification(50));
console.log(ageClassification(70));
console.log(ageClassification(80));
console.log(ageClassification(100));
console.log(ageClassification(200));


// 7
function oddFn(n) {
    var i = 1;
    var newArr = [];
    while (i<=n) {
        if (i % n != 0) {
            newArr.push(i);
        }
        i++;
    }
return newArr;
}
console.log(oddFn(10));