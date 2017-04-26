$(document).ready(function(){
  $('.carrousel').slick({
    autoplay:true,
    arrows:true
  });
});

$(document).ready(function(){
	var leftArrow = $(".slick-prev.slick-arrow");
	leftArrow.text("").addClass("pull-left");
	var LAdiv = $("<div><img class='img-responsive' src='img/arrowLeft.png'></div>");
	leftArrow.append(LAdiv);

	var rightArrow = $(".slick-next.slick-arrow");
	rightArrow.text("").addClass("pull-right");
	var RAdiv = $("<div><img class='img-responsive' src='img/arrowRight.png'></div>");
	rightArrow.append(RAdiv);
});