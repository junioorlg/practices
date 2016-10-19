/*var serializeObject = function () {
	var oJson = {},
		oArray = this.serializeArray();
	
	$.each(a, function(){
		if(oJson[this.name] !== undefined){
			if(!oJson[this.name].push){
				oJson[this.name] = [oJson[this.name]];
			}
			oJson[this.name].push(this.value || '');
		}else{
			oJson[this.name] = this.name || '';
		}
	});

	return oJson;
}*/

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

/* http://jsfiddle.net/sxGtM/3/ --> save json */
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

    /*$('#formAdd').submit(function() {
        $('#result').text(JSON.stringify($('form').serializeObject()));
        return false;
    });*/
});

$("#formAdd").submit(function(e){

    e.preventDefault();

    var data = {}
    var Form = this;

    //Gathering the Data
    //and removing undefined keys(buttons)
    $.each(this.elements, function(i, v){
		var input = $(v);
		data[input.attr("name")] = input.val();
		delete data["undefined"];
    });

    //Form Validation goes here....

    //Save Form Data........
    $.ajax({
        cache: false,
        url : "http://localhost/git/practices/listOfItems/",
        type: "POST",
        dataType : "json",
        data : JSON.stringify(data),
        context : Form,
        success : function(callback){
            //Where $(this) => context == FORM
            console.log(JSON.parse(callback));
            $(this).html("Success!");
        },
        error : function(){
            $(this).html("Error!");
        }
    });
});