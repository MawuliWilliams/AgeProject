

function Calculate(){	
var month = document.getElementById("month").value;
var day = document.getElementById("day").value;
var year = document.getElementById("year").value;

var date = new Date();
var month2 = 1 + date.getMonth();
var day2 = date.getDate();
var year2 = date.getFullYear();
var month3 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (day > day2) {
	day2 = day2 + month3[month2 - 1];
	month2 = month2 - 1;
}
 if (month > month2){
 	month2 = month2 + 12;
 	year2 = year2 - 1;
}

var d2 = date.getDate();
var m2 = 1 + date.getMonth(); 
var d3 = day.toString();
var month4 = month.toString();

if (d2.toString() == d3 && m2.toString() == month4) {
	alert("Happy Birthday");
}


var d = day2 - day;
var m = month2 - month;
var y = year2 - year;



document.getElementById("result").innerHTML = "your age is  " + y +  "years"  + m +  "months"  + d +  "days";

}

 