const accordion = document.getElementsByClassName("accordionToggle");

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function () {
		this.classList.toggle("active");
	});
}

// const accordion = ;

// accordion.addEventListener("click", function expand() {
// 	document.getElementsByClassName("contentItems").stlye.display = "none";
// });
// const accordionToggle = document.getElementsByClassName("contentItems");

// const accordionContainer =
// 	document.getElementsByClassName("accordionContainer");
// const accordionToggle = document.getElementsByClassName("accordionToggle");
// const content = document.getElementsByClassName("content");

// accordionToggle.addEventListener("click", function expand() {
// 	for (i = 0; i < content.length; i++) {
// 		content[i].style.display = "none";
// 	}
// });
