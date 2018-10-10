		$(function(){
			$('#add').click(function(){
				var text = $('#input').val();
				var html = `<tr>
					<td class="checkbox"></td>
					<td class="text">`+ text +`</td>
					<td class="del"><i class="fas fa-times"></i></td>
				</tr>`;
				if (text == '') {
					alert("Nhập dữ liệu đi nhé !!!")
				}else{
					$('#input').val('');
					$('#content').append(html);
				}
		});
			$('#content').on('click', '.text', function(){
				var index = $(this);
				if (index.prev().html()=='') {
					index.css('text-decoration','line-through');
					index.prev().html('<i class="fas fa-check"></i>');
					$(index).parent().css('background', 'rgb(179, 179, 179, 1)').css('color','#EEEEEE');
				}else{
					index.css('text-decoration', 'none');
					index.prev().html('');
					$(index).parent().css('background','#d9d9d9').css('color', 'black')
				}
			});
			$('#content').on('click', '.del', function(){
				var index = $(this);
				$(index).parent().remove();
			})
			})