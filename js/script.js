$(document).ready(function() {
 //
 // add your jQuery code here
$("#button1").mouseenter(function(){
$('#button1').removeClass("makeRed").addClass("makeBorder");
});

$("#button1").mouseleave(function(){
$("#button1").removeClass("makeBorder").addClass("makeRed");
});

$("#button1").click(function(){
    $("#para1").slideToggle();
})

$("#button2").click(function(){
    $("#para2").fadeToggle(3900);
})

}); 