$.getJSON("games.json", function(json) {
	var output = '<ul id="sortable1" class="connectedSortable">';
	for (i in json){
		output += '<li>';
		output += 	'<div class="row boxArticles white">';
		output += 		'<div class="col l2 imgArticles">';
		output += 			'<img class="responsive-img" src="' + json[i].img + '" alt="">';
		output += 		'</div>';
		output += 		'<div class="col l10 descriptionArticles">';
		output += 			'<div class="panel">';
		output += 				'<i class="small material-icons edit">mode_edit</i>';
		output += 				'<i class="small material-icons delete">delete</i>';
		output += 			'</div>';
		output += 			'<b>' + json[i].title + '</b>';
		output += 			'<p>' + json[i].description + '</p>';
		output += 		'</div>';
		output += 	'</div>';
		output += '</li>';
	}
	output += '</ul>';
	$('.containerGames').append(output);
	/*var count = Object.keys(json).length;
	console.log(json);*/
});

/* http://stackoverflow.com/questions/4538269/adding-removing-items-from-json-data-with-jquery --> save json */
$(function(){
	$("#sortable1").sortable({
		connectWith: ".connectedSortable"
    }).disableSelection();

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

    $('form').submit(function() {
        console.log(JSON.stringify($('form').serializeObject()));
        return false;
    });
});

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};