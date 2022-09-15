// function () {
	
// 	let date = document.getElementById("date");
// 	      let time = document.getElementById("time");
// 	      // creating the date object and getting the date and time
// 	      let newDate = new Date();
// 	      let year = newDate.getFullYear();
// 	      let month = newDate.getMonth();
// 	      let todaySDate = newDate.getDate();
// 	      let hours = newDate.getHours();
// 	      let minutes = newDate.getMinutes();
// 	      let seconds = newDate.getSeconds();
// 	      date.innerHTML = " " + todaySDate + "/ " + month + "/ " + year;
// 	      time.innerHTML = hours + ": " + minutes + ": " + seconds;
// }

// function currentDate() {
// 	var objToday = new Date(),
// 	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
// 	dayOfWeek = weekday[objToday.getDay()],
// 	domEnder = function () { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
// 	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
// 	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
// 	curMonth = months[objToday.getMonth()],
// 	curYear = objToday.getFullYear(),
// 	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
// 	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
// 	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
// 	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
// 	var today = curHour + "|" + curMinute + "." + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " " + curMonth + "," + curYear;
	
// 	// cells = document.querySelectorAll('table.meta td:lastChild span:last-child');
// 	document.getElementsById('table.meta #date')[0].textContent = today;
// 	// cells[1].innerHTML = today;
// }

