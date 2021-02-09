	$('#btnRun1').click(function() {

		$.ajax({
			url: "libs/php/getWeatherInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selWeatherLat').val(),
				lng: $('#selWeatherLng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#weatherClouds').html(result['data']['clouds']);
					$('#weatherStationName').html(result['data']['stationName']);
					$('#weatherTemperature').html(result['data']['temperature']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(errorThrown)
				console.log(textStatus)
				console.log(jqXHR)
			}
		}); 
	

	});

	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/getOceanInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selOceanLat').val(),
				lng: $('#selOceanLng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#oceanName').html(result['data']['name']);
					$('#oceanGeonameId').html(result['data']['geonameId']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(errorThrown)
				console.log(textStatus)
				console.log(jqXHR)
			}
		}); 
	

	});

	$('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/getPlaceInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selPlaceLat').val(),
				lng: $('#selPlaceLng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#placeDistance').html(result['data'][0]['distance']);
					$('#placeCountryName').html(result['data'][0]['countryName']);
					$('#placeName').html(result['data'][0]['asciiName']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(errorThrown)
				console.log(textStatus)
				console.log(jqXHR)
			}
		}); 
	

	});