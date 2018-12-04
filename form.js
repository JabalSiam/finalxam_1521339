$('#product').submit(function(){
				var name = $('#name').val();
				var price = $('#price').val();
				var quantity = $('#quantity').val();
				 $('#productlist').append('<li>'+name+'| Tk.'+price+'</li>');
				});
			