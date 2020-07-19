$(function() {
	$('.change-devour').on('click', function(event) {
		var id = $(this).data('id');
		var newState = $(this).data('newdevour');

		var newEatingState = {
			devoured: newState
		};

		$.ajax('/api/burger/' + id, {
			type: 'PUT',
			data: newEatingState
		}).then(function() {
			console.log('changed eat to', newEatingState);
			// Reload the page to get the updated list
			location.reload();
		});
	});

	$('.create-form').on('submit', function(event) {
		// PreventDefault on a submit event.
		event.preventDefault();

		var newburger = {
			burger_name: $('#newburger').val().trim(),
			devoured: 0 //Set to false
		};

		// Sends the POST request.
		$.ajax('/api/burger', {
			type: 'POST',
			data: newburger
		}).then(function() {
			console.log('created new burger');
			// Reloads the page to get the updated list
			location.reload();
		});
	});
});
