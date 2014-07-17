$(document).ready(function(){
		$('.list_item_input').keyup(function(event){
		if (event.keyCode == 13) {
		var add = $(this).val();
		$(".list_item_return").append('<li class="list_style_regular">' + add + '</li>');
		}
		})


		$('.main').on('click', '.list_item_button', function(){
		var add = $('.list_item_input').val();
		$(".list_item_return").append('<li class="list_style_regular">' + add + '</li>');
		});

		$('.list_item_return').on('click', 'li', function(){
		$(this).addClass("list_style_cross");

		});

		$('.list_item_return').on('dblclick', 'li', function(){
		$(this).remove();

		});

});

