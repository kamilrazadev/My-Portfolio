const loaderContainer = document.getElementById("loader-container");

// Sidebar Handler

const sideBar = document.getElementById("sidebar");
const navBar = document.getElementById("navbar");

let isSidebarOpen = false;

function handleSideaBarOpen() {
  if (!isSidebarOpen) {
    sideBar.style.left = "0";
    navBar.style.boxShadow = "none";
    isSidebarOpen = true;
  } else {
    sideBar.style.left = "-100%";
    navBar.style.boxShadow = "0 0 5px 1px rgb(164, 164, 164)";
    isSidebarOpen = false;
  }
}

// Sidebar Closer

const checkboxNav = document.getElementById("checkbox-nav");

function closeSideBar() {
  sideBar.style.left = "-100%";
  navBar.style.boxShadow = "0 0 5px 1px rgb(164, 164, 164)";
  isSidebarOpen = false;
  checkboxNav.checked = false;
}

// Theme Handler

const themeToggle = document.getElementById("theme-toggle");
const lightThemeIcon = document.getElementById("sun");
const darkThemeIcon = document.getElementById("moon");
const body = document.body;

// themeToggle.addEventListener("click", () => {
function themeHandler() {
  console.log("Run");
  body.classList.toggle("dark-theme");
}
// darkThemeIcon.classList.toggle("hidden");
// lightThemeIcon.classList.toggle("hidden");
// });
