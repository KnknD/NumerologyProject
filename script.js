import { calculateLifeNum, calculateNum, calculateAssNum } from './start.js'

const button = document.querySelector('.button');
const form = document.querySelector('.calculator');

let DD = null;
let MM = null;
let YY = null;
let DOB  = null;

function getDOB() {
    DD = document.getElementById('DD').value;
    MM = document.getElementById('MM').value;
    YY = document.getElementById('YY').value;
    DOB = `${DD}${MM}${YY}`;
}

function start() {
    document.querySelector('.result-wrapper').style.display = 'grid';
    getDOB();
    calculateLifeNum(DD);
    calculateNum(DOB);
    calculateAssNum(YY);
}

form.addEventListener('submit', (event) => event.preventDefault());
button.addEventListener('click', start);