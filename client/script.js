$(document).ready(function(){

	$("#submitBtn").click(function(){
		$('#madlib').hide().fadeIn("slow");
		var exclaim = $('#exclaimation').val();
		var adverb = $('#adverb').val();
		var noun = $('#noun').val();
		var verb = $('#verb').val();
		$('#madlib').html(exclaim + " " + adverb + " " + noun + " " + verb);
		$('#madlib').css('color', '#0000ff');
	});

});