// menu
function menu() {
	var menuBox = document.querySelector('.menuBox');
	menuBox.style.display = "flex";
	document.getElementById('menuButton').setAttribute('onclick','menuOff();');
}
function menuOff() {
	var menuBox = document.querySelector('.menuBox');
	menuBox.style.display = "none";
	document.getElementById('menuButton').setAttribute('onclick','menu();');
}