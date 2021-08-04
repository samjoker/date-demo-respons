// ! code to add open and close functionality to divs

const clickOpen = document.querySelector('.btn-container');
const clickClose = document.querySelector('.date-time');
const cancel = document.querySelector('.close');
// const submit = document.querySelector('.btn-primary');
const submit = document.querySelector('.loti-img');
const paraGraph = document.querySelector('.para');

cancel.addEventListener('click', close);
submit.addEventListener('click', open);

function close() {
	clickClose.style.display = 'none';
	clickOpen.style.display = 'flex';
	consloe.log('same');
}
function open() {
	clickOpen.style.display = 'none';
	clickClose.style.display = 'flex';
}

// ?code to put date and text

const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const day = currentDate.getDay();
const year = 'Twenty Twenty One';
console.log(date, month, day);

// console.log(date);

const dates = [
	'First',
	'Second',
	'Third',
	'Fourth',
	'Fifth',
	'Sixth',
	'Seventh',
	'Eighth',
	'Ninth',
	'Tenth',
	'Eleventh',
	'Twelveth',
	'Thirteenth',
	'Fourteenth',
	'Fifteenth',
	'Sixteenth',
	'Seventeenth',
	'Eighteenth',
	'Ninteenth',
	'Twentyth',
	'Twenty one',
	'Twenty Two',
	'Twent Three',
	'Twenty Four',
	'Twenty Five',
	'Twnety Six',
	'Twenty Eight',
	'Twenty Nine',
	'Thirty',
	'Thirty One',
];
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
console.log(dates + months + days);
paraGraph.innerHTML =
	'Your Death day ' +
	'is "' +
	days[day] +
	' ' +
	dates[date - 1] +
	' ' +
	months[month] +
	' ' +
	year +
	' "';
