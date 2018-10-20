var today = new Date();
let DOW = '';

//Set day variable
var day = today.getDay();
console.log(day);

//Turn day variable integer into string
if (day == 0) {
	DOW = 'Sunday';
} else if (day == 1) {
	DOW = 'Monday';
} else if (day == 2) {
	DOW = 'Tuesday';
} else if (day == 3) {
	DOW = 'Wednesday';
} else if (day == 4) {
	DOW = 'Thursday';
} else if (day == 5) {
	DOW = 'Friday';
} else if (day == 6) {
	DOW = 'Saturday';
} else {
	DOW = 'ERROR: Unable to retrieve day';
}

//Set month variable
var month = today.getMonth() +1;

//Turn month variable into a string
if (month == 1) {
	month = 'January';
} else if (month == 2) {
	month = 'February';
} else if (month == 3) {
	month = 'March';
} else if (month == 4) {
	month = 'April';
} else if (month == 5) {
	month = 'May';
} else if (month == 6) {
	month = 'June';
} else if (month == 7) {
	month = 'July';
} else if (month == 8) {
	month = 'August';
}else if (month == 9) {
	month = 'September';
}else if (month == 10) {
	month = 'October';
}else if (month == 11) {
	month = 'November';
}else if (month == 12) {
	month = 'October';
}else {
	month = 'ERROR: Unable to retrieve month';
}




//Set date variable
var date = today.getDate();
//Set year variable
var year = today.getFullYear();

//Write todays full date to the document.
today = "Today is " + DOW + ', ' + month + ' ' + date + ', ' + year; 
document.write(today);