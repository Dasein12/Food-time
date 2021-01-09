$('body').scrollspy({selector:'.scrollclass',offset:150});

    var myCenter=new google.maps.LatLng(44.4352904,26.0549218);
    
    function initialize()
    {
    var mapProp = {
      center:myCenter,
      zoom:18,
      scrollwheel:  false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };
    
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
    var marker=new google.maps.Marker({
      position:myCenter,
      animation:google.maps.Animation.DROP,
      icon:'layout/logo.png'
      });
    
    marker.setMap(map);
    
    var infowindow = new google.maps.InfoWindow({
      content:"Street number #, Downton - City | ZipCode: 000000"
      });
    
    infowindow.open(map,marker);
    }
    
    google.maps.event.addDomListener(window, 'load', initialize);


		$(window).stellar();
		
		window.sr = ScrollReveal({ reset: true });
		sr.reveal('#about_us', { delay: 400 });
		sr.reveal('h1', { delay: 200 });
		sr.reveal('#contact');
		sr.reveal('.item_menu', { rotate: { x: 0, y: 0, z: 50 }});
		sr.reveal('form');
		sr.reveal('.promotion-one', { origin: 'left'});
		sr.reveal('.promotion-two', { origin: 'right'});
		sr.reveal('#map', { origin: 'left'});
		sr.reveal('.address', { origin: 'right'});
		
	
	
		var request;
		
		$("#newsletter").submit(function(event){
		
			if (request) {
				request.abort();
			}
			
			var $form = $(this);
			var $inputs = $form.find("#email_newsletter");
			var submit = $form.find("button");
			submit.text('Done!').prop('disabled', true);
			var serializedData = $form.serialize();
	
			$inputs.prop("disabled", true);
		
			request = $.ajax({
				url: "php/classes.php?action=newsletter",
				type: "post",
				data: serializedData
			});
		
			request.done(function (response, textStatus, jqXHR){
				console.log("Hooray, it worked!");
				console.log("Response: "+response);
			});
		
			request.fail(function (jqXHR, textStatus, errorThrown){
				console.error(
					"The following error occurred: "+
					textStatus, errorThrown
				);
			});
		
			request.always(function () {
				$inputs.prop("disabled", false);
			});
		
			event.preventDefault();
		});

		var request;
		
		$("#booking_form").submit(function(event){
		
			if (request) {
				request.abort();
			}
			var $form = $(this);
		
			var $inputs = $form.find("#your_name","#number_of_people","#date","#hour","#message");
			var submit = $form.find("button");
			submit.text('Done!').prop('disabled', true);
			var serializedData = $form.serialize();
		
			$inputs.prop("disabled", true);
		
			request = $.ajax({
				url: "php/classes.php?action=booking",
				type: "post",
				data: serializedData
			});
		
			request.done(function (response, textStatus, jqXHR){
				console.log("Hooray, it worked!");
				console.log("Response: "+response);
			});
		
			request.fail(function (jqXHR, textStatus, errorThrown){
				console.error(
					"The following error occurred: "+
					textStatus, errorThrown
				);
			});
		
			request.always(function () {
				$inputs.prop("disabled", false);
			});
			event.preventDefault();
		});

		var request;
		
		$("#form_contact").submit(function(event){
	
			if (request) {
				request.abort();
			}
			var $form = $(this);
			var $inputs = $form.find("#contact_name","#contact_email","#contact_phone","#contact_subject","#contact_message");
			var submit = $form.find("button");
			submit.text('Done!').prop('disabled', true);
			var serializedData = $form.serialize();
			$inputs.prop("disabled", true);
		
			request = $.ajax({
				url: "php/classes.php?action=contacting",
				type: "post",
				data: serializedData
			});
		
			request.done(function (response, textStatus, jqXHR){
				console.log("Hooray, it worked!");
				console.log("Response: "+response);
			});
		
			request.fail(function (jqXHR, textStatus, errorThrown){
				console.error(
					"The following error occurred: "+
					textStatus, errorThrown
				);
			});
		
			request.always(function () {
				$inputs.prop("disabled", false);
			});
		
			event.preventDefault();
		});
