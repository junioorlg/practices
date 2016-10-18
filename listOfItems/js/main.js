$(function(){
	$("#sortable1").sortable({
		connectWith: ".connectedSortable"
    }).disableSelection();

	$.getJSON("games.json", function(json) {
		console.log(json); // this will show the info it in firebug console
	});

	$('.ui-sortable-handle')
		.mouseenter(function(){
			$(this).find(".panel").show();
		})
		.mouseleave(function(){
			$(this).find(".panel").hide();
		});
	$('.ui-sortable-handle .edit').on("click", function(){
		console.log('esta haciendo click para editar');
	})
	$('.ui-sortable-handle .delete').on("click", function(){
		$(this).parent().parent().parent().parent().hide()
	})
});