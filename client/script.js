$(document).ready(function(){

	$("#submitBtn").click(function(){
		var exclaim = $('#exclaimation').val();
		var adverb = $('#adverb').val();
		var noun = $('#noun').val();
		var verb = $('#verb').val();
		console.log(exclaim + " " + adverb + " " + noun + " " + verb + ".");
	});

});