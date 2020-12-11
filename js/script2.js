function displayPics(){
	var photos = document.getElementById('galerie_mini');
	var liens = getElementsByTagName('a');
	var big_photo = document.getElementById('big_pict');
	var titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0];
		for(var i=0; i < liens.Length ; ++i){
			liens[i].onclick = function(){
				big_photo.src = this.href;
				big_photo.alt = this.title;
				return false;
			};

		}
}
window.onload = displayPics;