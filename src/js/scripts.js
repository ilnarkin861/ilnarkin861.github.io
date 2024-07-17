$(document).ready(function(){
	
	$(window).load(function(){ 
		progressOfSkills();
	});

	$(window).scroll(function(){ 
		progressOfSkills();
	});	

	new WOW().init();

	let progressCompleted = false;

	function progressOfSkills(){

		if(!progressCompleted){

			let skillsSection = $('#skills');

			if(skillsSection.offset().top - 200 <= $(window).scrollTop()){

				skillsSection.find('.skill-progress-bar').each(function (){
					let width = $(this).data('width');
					$(this).find('.inner').animate({
						width: width
					}, 1500)
				});

				progressCompleted = true;
			}
		}
	}
});

const imageLoader = document.getElementById('image-loader');
const templateLoader = document.getElementById('template-loader');
const deviceButtons = templateLoader.querySelectorAll('.device-button')


function loadImage(title, imageUrl){
	let imageTitle = imageLoader.querySelector('.title');
	let imageArea = imageLoader.querySelector('.image-area');
	imageTitle.textContent = title;
	imageArea.innerHTML = '<img src="'+imageUrl+'" alt="'+title+'">';
	imageLoader.style.marginTop = window.scrollY +'px';
	imageLoader.classList.remove('hidden');
	document.body.classList.add('fixed');
	imageLoader.scrollTo(0, 0);
	return false;
}


imageLoader.querySelector('.image-loader-close').addEventListener('click', function (){
	imageLoader.classList.add('hidden');
	document.body.classList.remove('fixed');
	imageLoader.querySelector('.image-area').innerHTML = '';	
});


function loadTemplate(templateUrl){
	let templateArea = templateLoader.querySelector('.template-area');
	templateArea.innerHTML = '<iframe src="' +templateUrl+ '">';
	templateLoader.classList.remove('hidden');
	document.body.classList.add('fixed');

	clearDeviceButtons();

	if(document.documentElement.clientWidth >= 1200){
		templateLoader.querySelector('#desktop-button').classList.add('active');
	}

	return false;
}


templateLoader.querySelector('#template-loader-close').addEventListener('click', function(){
	templateLoader.classList.add('hidden');
	document.body.classList.remove('fixed');
	templateLoader.querySelector('.template-area').innerHTML = '';
});


deviceButtons.forEach(function(button){
	button.addEventListener('click', function(){
		let width = this.dataset.width;
		clearDeviceButtons();
		templateLoader.querySelector('iframe').style.width = width;
		this.classList.add('active');
	});
});


function clearDeviceButtons(){
	deviceButtons.forEach(function(button){
		button.classList.remove('active');
	});
}