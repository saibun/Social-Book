let option_container = document.getElementById('nav-profile-img');
function optionShow(){
	option_container.classList.toggle('show-option');
}

//make setting menu option dark
function darkMode(){
	document.body.classList.toggle('dark-mode');
	if(localStorage.getItem("theam")=="light"){
		localStorage.setItem("theam","dark");
		
	}else{
		localStorage.setItem("theam","light");
	}
}

if(localStorage.getItem("theam")=="light"){
	document.body.classList.remove('dark-mode');
}else if(localStorage.getItem("theam")=="dark"){
	document.body.classList.add('dark-mode');
	document.getElementsByClassName("check_box")[0].checked = true;
}else{
	localStorage.setItem("theam","light");
}
