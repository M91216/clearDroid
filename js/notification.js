  
  
  
  
  
  document.addEventListener("deviceready", onDeviceReady, false);
  


function onDeviceReady() {

  //During testing, Let me know PhoneGap actually
  // initialized
  alert("onDeviceReady");
  //Get our media file and stuff
  //showAlert();
}
function alertDismissed() {
	// do something
	alert("almost there");
}

// Show a custom alertDismissed
//

function showAlert() {
	navigator.notification.alert(
		'You are the winner!', // message
		alertDismissed, // callback
		'Game Over', // title
		'Done' // buttonName
	);
}
showAlert();