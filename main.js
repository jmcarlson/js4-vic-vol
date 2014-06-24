var isNbr = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

var getVictims = function() {
	var x = 0;
	if(!(isNbr(x = prompt("Enter nbr of victims")))) {	x = getVictims(); }
	return x;
}

var getVolunteers = function() {
	var x = 0;
	if(!(isNbr(x = prompt("Enter nbr of volunteers")))) {	x = getVolunteers(); }
	return x;
}


var nbrVic = getVictims();

var arrVicName = [];
var arrVicPhone = [];
var arrVicStreet = [];

for (var i = 1; i <= nbrVic; i++) {
	arrVicName.push(prompt("Enter name "));
	arrVicPhone.push(prompt("Enter phone "));
	arrVicStreet.push(prompt("Enter street "));
};


var nbrVol = getVolunteers();

var arrVolName = [];
var arrVolPhone = [];
var arrVolStreet = [];

for (var i = 1; i <= nbrVol; i++) {
	arrVolName.push(prompt("Enter name "));
	arrVolPhone.push(prompt("Enter phone "));
	arrVolStreet.push(prompt("Enter street "));
};

alert("Victims: " + nbrVic + ", Volunteers: " + nbrVol + ", Victim names: " + arrVicName + ", Volunteer names: " + arrVolName);