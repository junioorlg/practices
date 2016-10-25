var allGames = []
	retrievedObject = localStorage.getItem('testObject'),
	totaliti = JSON.parse(retrievedObject);


function showGames () {
	$.getJSON("games.json", function(json) {
		$('#sortable1').remove();
		var output = "";
		var output = '<ul id="sortable1" class="connectedSortable">';
		for (i in json){
			output += '<li id="' + json[i].id + '">';
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
		for ( i in allGames){
			output += '<li id="' + allGames[i].id + '">';
			output += 	'<div class="row boxArticles white">';
			output += 		'<div class="col l2 imgArticles">';
			output += 			'<img class="responsive-img" src="' + allGames[i].img + '" alt="">';
			output += 		'</div>';
			output += 		'<div class="col l10 descriptionArticles">';
			output += 			'<div class="panel">';
			output += 				'<i class="small material-icons edit">mode_edit</i>';
			output += 				'<i class="small material-icons delete">delete</i>';
			output += 			'</div>';
			output += 			'<b>' + allGames[i].title + '</b>';
			output += 			'<p>' + allGames[i].description + '</p>';
			output += 		'</div>';
			output += 	'</div>';
			output += '</li>';
		}
		output += '</ul>';
		$('.containerGames').append(output);
		console.log('retrievedObject: ', JSON.parse(retrievedObject));
	});
}

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
});

// add form to json file and add items to the view
document.getElementById("btnSubmit").addEventListener("click", addItem);
function addItem () {
	var newGame = {};

	$.ajax({
		url: 'games.json',
		async: false,
		dataType: 'json',
		success: function (json) {
			newGame.id = Object.keys(json).length + 1;
			newGame.img =  "media/" + $('#img').val().substr(12, $('#img').val().length + 1);
			newGame.title = $('#title').val();
			newGame.description = $('#description').val();
			allGames.push(newGame);
			//console.log(allGames);
			localStorage.setItem('testObject', JSON.stringify(allGames));
			showGames();
		}
	});
	$.getJSON("games.json", function(json) {
	    /*json.push(newGame);
		console.log(json);
	    localStorage.setItem('testObject', JSON.stringify(json));
	    allGames.push(json);

	    console.log(allGames);
		var retrievedObject = localStorage.getItem('testObject');

		console.log('retrievedObject: ', JSON.parse(retrievedObject));*/
	});

}

showGames();