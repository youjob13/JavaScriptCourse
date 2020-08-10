//declaration variable

let lang = 'ru'; //change 'en' on 'ru'
let daysOfTheWeekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let daysOfTheWeekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let namePerson = 'Артем'; //change 'Артем' on 'Максим' or something other

    //Task 1

    // If
    if (lang == 'ru') {
        console.log(daysOfTheWeekRu);
    } else if (lang == 'en') {
        console.log(daysOfTheWeekEn);
    } else {
        console.log('Error');
    }

    //Switch
    switch (lang) {
        case 'ru':
            console.log(daysOfTheWeekRu);
            break;
        case 'en':
            console.log(daysOfTheWeekEn);
            break;
        default:
            console.log('Error');
    }

    // Array
    let daysOfTheWeek = new Map([['ru', daysOfTheWeekRu],['en', daysOfTheWeekEn]]);
    console.log(daysOfTheWeek.get(lang));


    //Task 2
    namePerson = (namePerson == 'Артем') ? 'Директор' : (namePerson == 'Максим') ? 'Преподователь' : 'Студент';
    console.log(namePerson);



