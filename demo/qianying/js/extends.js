/*
 *	2017-03-06
 *  Zhong
 * 
 * 已屏蔽 ：鼠标右键，鼠标选中文字，a标签拖动。
 * */
$(function(){
	//屏蔽右键
	$('body').on('contextmenu', function(e){return false;});
	//屏蔽a标签鼠标拖动
	$('body a').attr('draggable',false);
	
	//简介
	$('.list').on('hover','li img',function(){
		$(this).siblings('.memo').show();	
	})

	$('.memo,.list').mouseleave(function(){
		$('.memo').hide();
	})
	
	//默认全选
	$("input[name='ExtPlugin']").attr('checked', true)
	
	//全选
	$('#checkedAll').click(function(){
		var scheck = $(this).is(':checked');
		if(scheck){
			$("input[name='ExtPlugin']").attr('checked', true)
		}else{
			$("input[name='ExtPlugin']").attr('checked', false)
		}
	})
	
	$('#change').click(function(){
		change()
	})

 var listArr = [];
	//换一换
function change(){
	$.ajax({
		url:'http://ext.iqying.com/index.php/api/default/getrecommlist',
        dataType:'jsonp',
		data:{VAR_JSONP_HANDLER:'jsonpcallback'},
        jsonpCallback:'jsonpcallback',
		success:function(data){
            	var pageSize = data.length/6;
            	console.log(data)
            //$('#list_data').html(template('template',{model:data}));
		}
	})



}




})

