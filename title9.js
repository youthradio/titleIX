var content = ["intro","teacher","principal","meeting","interim","investigation","decision"];
var i = 0


$(document).ready(function(){
	$('.logo').click(function(){
		$('.logo').popover('toggle')
	});

	$('body').scrollspy({ target: '#navdivbuttons' });

	$(".navbutton").click(function(event) {
			event.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  	});

    $("#startbutton").click(function(){
        $("body").removeClass("stopscrolling");	
        $("#splashpage").fadeOut();
    });

//Tell A Teacher
	$("#teacherOption1").click(function(){
		$("#teacherContent").html(teacherOption1.value)
		$("#next1").removeClass("hidden");
	});
	$("#teacherOption2").click(function(){
		$("#teacherContent").html(teacherOption2.value)
		$("#next1").removeClass("hidden");
	});
//Principal Option
	$("#principalOption1").click(function(){
		$("#principalContent").html(principalOption1.value)
		$("#next2").removeClass("hidden");
	});
	$("#principalOption2").click(function(){
		$("#principalContent").html(principalOption2.value)
		$("#next2").removeClass("hidden");
	});
	$("#principalOption3").click(function(){
		$("#principalContent").html(principalOption3.value)
		$("#next2").removeClass("hidden");
	});
//Meeting
	$("#meetingOption1").click(function(){
		$("#meetingContent").html(meetingOption1.value)
		$("#next3").removeClass("hidden");
	});
	$("#meetingOption2").click(function(){
		$("#meetingContent").html(meetingOption2.value)
		$("#next3").removeClass("hidden");
	});
//Interim Measures
	$("#interimOption1").click(function(){
		$("#interimContent").html(interimOption1.value)
		$("#next4").removeClass("hidden");
	});
	$("#interimOption2").click(function(){
		$("#interimContent").html(interimOption2.value)
		$("#next4").removeClass("hidden");
	});
//Investigation
	$(".hoverbutton").hover(function(){
		$("#next5").removeClass("hidden");
	});

	$("#investigationOption1").hover(function(){
		$("#investigationOption1").text(investigationOption1.value);
		$("#investigationOption1").css("background-color","lightgreen");
	}, function(){
		$("#investigationOption1").text("Preventing or investigating rape, unwanted touching, inappropriate comments, ONLINE?");
		$("#investigationOption1").css("background-color","#96DCDD");
	});

	$("#investigationOption2").hover(function(){
		$("#investigationOption2").text(investigationOption2.value);
		$("#investigationOption2").css("background-color","tomato");
	}, function(){
		$("#investigationOption2").text("Changing the curriculum to make sure women's history and rights are being taught in class");
		$("#investigationOption2").css("background-color","#96DCDD");
	});

	$("#investigationOption3").hover(function(){
		$("#investigationOption3").text(investigationOption3.value);
		$("#investigationOption3").css("background-color","lightgreen");
	}, function(){
		$("#investigationOption3").text("Changing unfair access to equipment for boys' and girls' sports teams");
		$("#investigationOption3").css("background-color","#96DCDD");
	});

	$("#investigationOption4").hover(function(){
		$("#investigationOption4").text(investigationOption4.value);
		$("#investigationOption4").css("background-color","lightgreen");
	}, function(){
		$("#investigationOption4").text("Granting access to the bathroom or locker room that corresponds with students' gender identity");
		$("#investigationOption4").css("background-color","#96DCDD");
	});

	$("#investigationOption5").hover(function(){
		$("#investigationOption5").text(investigationOption5.value);
		$("#investigationOption5").css("background-color","mediumslateblue");
	}, function(){
		$("#investigationOption5").text("Yeah, my school doesn't offer any of these");
		$("#investigationOption5").css("background-color","#96DCDD");
	});
//Decision

});

