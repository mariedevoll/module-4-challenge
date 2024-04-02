const themeButton = document.querySelector(".toggle")


const readingMode = function() {
    const mode = localStorage.getItem("mode") || "dark";
    return mode;
}

const readBlogDataLocalStorage = function() {
    const stringData = localStorage.getItem("blogs");

    const data = JSON.parse(stringData);
    return data || [];
}

const applyMode = function(mode) {
    let icon, circleColor;

    console.log(mode);


    if(mode === "light"){
        icon = "☀️";
        circleColor = "#ffb100";
    } else {
        icon = "🌙"
        circleColor = "#8570a5"
    }
    themeButton.textContent = icon;
    document.body.classList = mode;
    document.documentElement.style.setProperty("--circle-color", circleColor)
}
const saveMode = function(mode){
    localStorage.setItem("mode", mode);

}

const handleTheme = function() {
    const mode = readingMode();

    let newMode;

    if (mode === "dark") {
        newMode = "light";
    } else {
        newMode = "dark";
    }
    applyMode(newMode);
    saveMode(newMode);
}

applyMode(readingMode());

themeButton.addEventListener("click", handleTheme);