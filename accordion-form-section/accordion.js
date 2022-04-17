// ========================================= ACCORDION TOGGLE

const accordion = document.getElementsByClassName("accordionToggle");

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function () {
		this.classList.toggle("active");
	});
}

// ============================================== DARK MODE

let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#switchInput");

const enableDarkMode = () => {
	document.body.classList.add("darkmode");
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	document.body.classList.remove("darkmode");
	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enabled") {
		enableDarkMode();
		console.log(darkMode);
	} else {
		disableDarkMode();
		console.log(darkMode);
	}
});
