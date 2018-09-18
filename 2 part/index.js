var input = document.querySelector('input');
var div = document.querySelector('div.kkk');
var div2 = document.querySelector('div.govno');

var img_arr = JSON.parse(localStorage.getItem('images')) || [];
div2.addEventListener('click', function () {
	var add = document.createElement('img');
	document.body.appendChild(add);
	add.src = input.value;
	add.onerror = function () {
		div.innerHTML = `No`;
		setTimeout(function () {
			div.innerHTML = '';
		}, 5000);
		this.parentElement.removeChild(this);
	}
	add.onload = function () {
		img_arr.push(input.value);
		div.innerHTML = `Supper`;
		setTimeout(function () {
			div.innerHTML = '';
		}, 5000);
		localStorage.setItem('images', JSON.stringify(img_arr));
	}
})


function gallery() {
	for (var i = 0; i < img_arr.length; i++) {
		var add = document.createElement('img');
		var add_2 = document.createElement('div');
		add.appendChild(add_2);
		add_2.classList.add('x');
		add_2.innerHTML = 'x';
		add.src = img_arr[i];
		document.body.appendChild(add);
	}
}

gallery();

