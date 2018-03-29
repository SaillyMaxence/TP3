
$(document).ready(function() {


$(document).on( "click", "#menutel", function() {
  console.log("ekzajork");
  $(".menuportable").addClass("menuportableactive");
  $(".menuportableactive").removeClass("menuportable");
  $("#menutel").addClass("oui");
});





$(document).on( "click", ".oui", function() {

	$(".menuportableactive").addClass("menuportable");
	$(".menuportable").removeClass("menuportableactive");
	$("#menutel").removeClass("oui");
  
});

document.addEventListener("deviceready", onDeviceReady, false);

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function devicecordova(){

    var model = device.model;
    var string = device.platform;
    var string1 = device.uuid;
    var string2 = device.version;

    alert ('Model :'+ model+'\n'+'Platforme :'+'\n'+ string+' '+string2+'\n'+'UUID :'+ string1);
    

}



window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
	alert("oui");
    alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
}



function onDeviceReady(){

checkConnection();
devicecordova();
onBatteryStatus();
}


});


