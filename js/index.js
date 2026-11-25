"use strict";
const windows = {
    "Menu": "main-menu",
    "Games": "games",
    "Develop": "dev",
    "Statistics": "stats",
    "Settings": "settings",
    "Credits": "credits"
};
/**
 * Shows the provided window and hides all other windows.
 * @param name - The window name as defined in "windows".
 */
function showWindowDiv(name) {
    for (const [key, value] of Object.entries(windows)) {
        const element = document.getElementById(`page-${value}`);
        if (!element)
            continue;
        element.style.display = key === name ? "block" : "none";
    }
}
/**
 * Gets a window element by its name.
 */
function getWindowDiv(name) {
    const windowId = windows[name];
    if (!windowId)
        return null;
    return document.getElementById(`page-${windowId}`);
}
function populateMainMenu() {
    showWindowDiv("Menu");
    const mainMenuOpts = [
        "Games",
        "Develop",
        "Statistics",
        "Settings",
        "Credits"
    ];
    const mainMenuDiv = getWindowDiv("Menu");
    if (!mainMenuDiv)
        return;
    for (let i = 0; i < mainMenuOpts.length; ++i) {
        const buttonDiv = document.createElement("div");
        const buttonTextDiv = document.createElement("div");
        buttonTextDiv.textContent = mainMenuOpts[i];
        // animation
        const leftSideArrowDiv = document.createElement("div");
        leftSideArrowDiv.textContent = ">";
        const rightSideArrowDiv = document.createElement("div");
        rightSideArrowDiv.textContent = "<";
        leftSideArrowDiv.classList.add("side-arrow");
        leftSideArrowDiv.classList.add("text");
        leftSideArrowDiv.classList.add("left");
        rightSideArrowDiv.classList.add("side-arrow");
        rightSideArrowDiv.classList.add("text");
        rightSideArrowDiv.classList.add("right");
        buttonTextDiv.classList.add("text");
        buttonDiv.classList.add("button");
        buttonDiv.appendChild(leftSideArrowDiv);
        buttonDiv.appendChild(buttonTextDiv);
        buttonDiv.appendChild(rightSideArrowDiv);
        mainMenuDiv.appendChild(buttonDiv);
    }
    const showspaceDiv = document.createElement("div");
    showspaceDiv.classList.add("showspace");
    mainMenuDiv.appendChild(showspaceDiv);
}
document.addEventListener("DOMContentLoaded", () => {
    populateMainMenu();
});
document.addEventListener("click", () => {
    navigator.vibrate([200]);
});
