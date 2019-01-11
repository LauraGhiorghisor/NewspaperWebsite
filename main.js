//this generates the date 
var clickcounter = 0;
var d = new Date();
//Displays a string version of the date
document.getElementById("current_date").innerHTML = d.toDateString();

//this function used for testing the clickcounter
//These are the drop downw menu display functions, triggered by different events. They react to the events depending on the status of the counter.
//Drop down displays when: user hovers or click on the burger button.
function drop_down_menu_display() {
	var a = document.getElementById("burger_drop_down");
	a.style.display = "flex";
	a.style.transition = "all 5s";
	clickcounter = 1;
}

function hover_drop_down_menu_display() {
	var a = document.getElementById("burger_drop_down");
	a.style.display = "flex";
	clickcounter = 0;
	a.style.transition = "all 5s";
}

//Exit functions: when hovering out, when x button is pressed, when burger button is cliked (if it was already clicked)
function drop_down_menu_exit() {
	var b = document.getElementById("burger_drop_down");
	b.style.display = "none";
	b.style.transition = "all 0.5s";
	clickcounter = 0;
}

function conditional_drop_down_menu_exit1() {
	if (clickcounter === 0) {
		var b = document.getElementById("burger_drop_down");
		b.style.display = "none";
	} else
		drop_down_menu_display();
}

function conditional_drop_down_menu_exit2() {
	if (clickcounter == 1) {
		var b = document.getElementById("burger_drop_down");
		b.style.display = "none";
		clickcounter = 0;
	} else if (clickcounter === 0) drop_down_menu_display();
}

//This makes either nac sticky. It gets the elements by tag name and stores both navs in an array.
function make_sticky() {
	if (window.scrollY > 220) {
		var p = document.getElementsByTagName("nav");
		p[0].style.position = "fixed";
		p[0].style.top = "0px";
		p[0].style.left = "0px";
		p[1].style.position = "fixed";
		p[1].style.top = "0px";
		p[1].style.left = "0px";
	}
}
//When user scrolls back up, nav tag goes back to normal.
function undo_sticky() {
	if (window.scrollY < 220) {
		var c = document.getElementsByTagName("nav");
		c[0].style.position = "static";
		c[1].style.position = "static";
	}

}

//This section adds the events wose methods are written above.
var x = document.getElementById("burger_button_container");
x.addEventListener("mouseover", hover_drop_down_menu_display);

x.addEventListener("mouseout", conditional_drop_down_menu_exit1);
x.addEventListener("click", conditional_drop_down_menu_exit2);

var y = document.getElementById("exit_button_burger_menu");
y.addEventListener("click", drop_down_menu_exit);


window.addEventListener('scroll', make_sticky);
window.addEventListener('scroll', undo_sticky);