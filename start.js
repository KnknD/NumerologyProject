import getAssNumberDescription from './AssNumber.js'
import getFullNumberDescription from './DOBNumber.js'
import getLifeNumberDescription from './FateNum.js'


export function calculateLifeNum(DD) {
    const temp = String(DD);
    const result = parseInt(temp[0]) + parseInt(temp[1]);
    getLifeNumberDescription(result);
    document.querySelector('.life-number').innerHTML = result;
}

export function calculateNum(DOB) {
    const temp = String(DOB).split('');
    const temp1 = temp.reduce((a,b) => parseInt(a)+parseInt(b)); //DOB CAN BE BIGGER THAN 10, FOR EXAMPLE 31 + 12 + 2009 = 19
    const result = Array.from(temp1.toString()).reduce((a,b) => parseInt(a)+parseInt(b)); //REDUCE 19 TO GET 1 NUMBER
    getFullNumberDescription(result);
    document.querySelector('.full-number').innerHTML = result;
}

export function calculateAssNum(YY) {
    const temp = String(YY).split('');
    const temp1 = temp.reduce((a,b) => parseInt(a)+parseInt(b)); //DOB CAN BE BIGGER THAN 10, FOR EXAMPLE 31 + 12 + 2009 = 19
    const result = Array.from(temp1.toString()).reduce((a,b) => parseInt(a)+parseInt(b)); //REDUCE 19 TO GET 1 NUMBER
    getAssNumberDescription(result);
    document.querySelector('.ass-number').innerHTML = result
}
