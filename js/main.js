const numOrStr = prompt('input number or string');

switch (isNaN(numOrStr) || numOrStr) {
    case null: {
        console.log('ви скасували');
        break;
    }
    case '': {
        console.log('Empty String');
        break;
    }
    case true: {
        console.log('number is Ba_NaN');
        break;
    }
    default: {
        console.log('OK!');
        break;
    }
}

/*
another way:

switch(true) {
    case numOrStr ==  null: {
        console.log('ви скасували');
        break;
    }
    case numOrStr == '': {
        console.log('Empty String');
        break;
    }
    case isNaN(numOrStr): {
        console.log('number is Ba_NaN');
        break;
    }
    default: {
        console.log('OK!');
        break;
    }
}
*/