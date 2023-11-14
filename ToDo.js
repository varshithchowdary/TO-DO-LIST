$("input").hide();
$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});


$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var newTask=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+newTask+"</li>");
	}
});


$(".fa-pencil-alt").click(function(){
	$("input").fadeToggle();
});