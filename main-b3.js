
var arrVicName = [];
var arrVicPhone = [];
var arrVicStreet = [];
var arrVolName = [];
var arrVolPhone = [];
var arrVolStreet = [];

var addPerson = function() {
	// alert("Adding person " + document.fAddPerson.fname.value + " (" + document.fAddPerson.vtype.value + ")");
	if(document.fAddPerson.vtype.value === 'victim') {
		arrVicName.push(document.fAddPerson.fname.value);
		arrVicPhone.push(document.fAddPerson.phone.value);
		arrVicStreet.push(document.fAddPerson.street.value);
		// console.log("Adding person " + arrVicName);
		alert("Victim " + arrVicName + ", " + arrVicPhone + ", " + arrVicStreet);
	}
	else {
		arrVolName.push(document.fAddPerson.fname.value);
		arrVolPhone.push(document.fAddPerson.phone.value);
		arrVolStreet.push(document.fAddPerson.street.value);	
		// console.log("Adding person " + arrVolName);
		alert("Victim " + arrVolName + ", " + arrVolPhone + ", " + arrVolStreet);	
	}
	
}
