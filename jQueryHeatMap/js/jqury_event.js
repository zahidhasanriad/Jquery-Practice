$(function() {
				$(document).bind({
					'click'	: function(event){
						var $target = $(event.target);
						if($target.hasClass('analyze')||$target.hasClass('overlay')) return;

						$('BODY').append($('<div/>', {
								css: {
									left			: event.pageX-10,
									top				: event.pageY-10,
									display			: 'none'
								},
								className			: 'dot'
						}));
					}
				});
				$('#analyze').bind({
					'click'	: function(event){
						$('#overlay').fadeIn();
						$('.dot').fadeIn();
					}
				});
				$('#overlay').bind({
					'click'	: function(event){
						$('#overlay').fadeOut();
						$('.dot').fadeOut();
					}
				});
			});