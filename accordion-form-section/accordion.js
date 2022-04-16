const accordion = document.getElementsByClassName("accordionToggle");

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function () {
		this.classList.toggle("active");
	});
}

// const style = document.documentElement.style;

//const darkTheme = () => {
// style.setProperty("var(--background)", "#0f1020");
// style.setProperty("--labels", "#dcccff");
// style.setProperty("--inputBack", "#212345");
// style.setProperty("--borders", "rgba(255, 255, 255, 0.1)");
// style.setProperty("--textInput", "#dcccff");

// style.setProperty("--background", "#dcccff");
// style.setProperty("--labels", "##932f6d");
// style.setProperty("--inputBack", "#FFF");
// style.setProperty("--borders", "rgba(147, 47, 109, 0.33)");
// style.setProperty("--textInput", "#420039");
