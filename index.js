var smaller = document.getElementById('smaller');
var inner = document.getElementById('inner');
var main = document.getElementById('main');
var i = 0;

function change() {
	i++;
	setTimeout(() => {
		this.style.border = '2px solid #000000';
	}, i * 1000)
}

document.querySelector('div').addEventListener('click', change, true);
document.querySelector('div > div').addEventListener('click', change, true);
document.querySelector('div > div > div').addEventListener('click', change, true);
// Если true то идет обратное всплывание, 
// не от дочернего элемента к родителю а наоборот
// Если без True - то будет от центра к внешнему, если с тру - то от внешнего бордера к центральному