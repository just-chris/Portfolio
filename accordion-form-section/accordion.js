// ========================================= ACCORDION TOGGLE
const accordion = document.getElementsByClassName("accordionToggle");

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function () {
		this.classList.toggle("active");
	});
}

// ============================================== DARK MODE

let darkMode = localStorage.getItem("darkMode");

let colorTheme = localStorage.getItem("colorTheme");

const colorInput = document.getElementById("colorInput");

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

colorInput.addEventListener("change", (e) => {
	if (e.target.value === "OpenText") {
		document.body.classList.remove("techintTheme");
		document.body.classList.remove("orangeTheme");
		document.body.classList.remove("greenTheme");
		document.body.classList.add("OT");
	} else if (e.target.value === "TECHINT") {
		document.body.classList.remove("orangeTheme");
		document.body.classList.remove("OT");
		document.body.classList.remove("greenTheme");
		document.body.classList.add("techintTheme");
	} else if (e.target.value === "Orange") {
		document.body.classList.remove("techintTheme");
		document.body.classList.remove("OT");
		document.body.classList.remove("greenTheme");
		document.body.classList.add("orangeTheme");
	} else if (e.target.value === "Green") {
		document.body.classList.remove("techintTheme");
		document.body.classList.remove("OT");
		document.body.classList.remove("orangeTheme");
		document.body.classList.add("greenTheme");
	}
});
