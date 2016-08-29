$(document).ready(function(){
    $('a.scroll').click(function(){
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });

	$('#skills').on('inview', function(event, isInView) {		
		$(".dial").knob();
		$({animatedVal: 0}).animate({animatedVal: 90}, {
		    duration: 2000,
		    easing: "swing",
		  step: function() {
		    $(".dial").val(Math.ceil(this.animatedVal)).trigger("change");
		  }
		});
		$(".dial2").knob();
		$({animatedVal: 0}).animate({animatedVal: 75}, {
		    duration: 2000,
		    easing: "swing",
		    height: 160,
		  step: function() {
		    $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change");
		  }
		});
		$(".dial3").knob();
		$({animatedVal: 0}).animate({animatedVal: 70}, {
		    duration: 2000,
		    easing: "swing",
		  step: function() {
		    $(".dial3").val(Math.ceil(this.animatedVal)).trigger("change");
		  }
		});
		$(".dial4").knob();
		$({animatedVal: 0}).animate({animatedVal: 85}, {
		    duration: 2000,
		    easing: "swing",
		  step: function() {
		    $(".dial4").val(Math.ceil(this.animatedVal)).trigger("change");
		  }
		});

		$('#skills').off('inview');
	});

	$("#loginform").validate({
       rules:{
            yourname:{
                required: true,
                minlength: 3,
                maxlength: 20,
            },
            youremail:{
                required: true,
                minlength: 6,
                maxlength: 20,
            },
            message:{
                required: true,
            },
       },
       messages:{
            yourname:{
                required: "All form fields are required for submission.",
                minlength: "Username must contain 3-20 characters.",
                maxlength: "Username must contain 3-20 characters.",
            },
            youremail:{
                required: "All form fields are required for submission.",
                minlength: "Email must contain 3-20 characters.",
                maxlength: "Email must contain 3-20 characters.",
            },
            message:{
                required: "All form fields are required for submission.",
            },
       }
    });

	$("#loginform").submit(function(e){
		var valid = $("#loginform").validate();
		if(valid.errorList.length == 0){
			e.preventDefault();
			$('#loginform button[type="submit"]').addClass("visible");
			setTimeout(function(){$('#loginform button[type="submit"]').removeClass("visible");}, 6000);
		}
	});
	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

});