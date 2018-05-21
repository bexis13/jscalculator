var display = document.querySelector('.display');
var numbers = document.querySelectorAll('.number');
var answer = document.querySelector('.answer');
var signs = document.querySelectorAll('.sign');
var back = document.querySelector('.back');
var afterAnswer = false;
//
for (var i = 0; i < numbers.length; i++) {
	numbers[i].onclick = function(){
		if (afterAnswer) {
			display.value = parseInt(this.innerHTML);
			afterAnswer = false
		}
		else{
			display.value += parseInt(this.innerHTML);
		}
	}
}
//
for (var i = 0; i < signs.length; i++) {
	signs[i].onclick = function(){
		display.value += this.innerHTML;
		afterAnswer = false
	}
}
//
answer.onclick = function(){
	display.value = eval(display.value);
	afterAnswer = true
}
//
back.onclick = function () {
	display.value = "";
}