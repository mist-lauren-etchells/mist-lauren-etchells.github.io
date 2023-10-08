// JavaScript file
$( function() {
   $("map area").click( function(){
  $('#myModal').modal("show");
      if ($(this).attr("id") == "Power") {
         $("#feedback").css("color","blue");
         $("#feedback").html("This is the power switch. It is used to turn the camera on and off");
      }

      if ($(this).attr("id") == "modes") {
         $("#feedback").css("color","blue");
         $("#feedback").html("This is the camera modes wheel. Turn it to select different shooting modes on your camera.");
      }

      if ($(this).attr("id") == "lens") {
         $("#feedback").css("color","blue");
         $("#feedback").html("This is the camera lens. It is used to capture a fixed focal point or image using varying amounts of light.");
      }
  if ($(this).attr("id") == "shutter") {
         $("#feedback").css("color","blue");
         $("#feedback").html("This is the shutter release button. You push this button to take a picture and capture an image.");}
	  
   });
}); //end main jQuery function


// JavaScript Document