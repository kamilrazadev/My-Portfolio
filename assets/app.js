// Starter loading handle

const loaderContainer = document.getElementById("loader-container");

setTimeout(() => {
  loaderContainer.style.display = "none";
}, 1010);

// Sidebar Handler

const sideBar = document.getElementById("sidebar");
const navBar = document.getElementById("navbar");
const socialLink1 = document.getElementById("social-link1")
const socialLink2 = document.getElementById("social-link2")
const socialLink3 = document.getElementById("social-link3")
const socialLink4 = document.getElementById("social-link4")
const socialLinksNavbar = [socialLink1, socialLink2, socialLink3, socialLink4]
const socialLink1Sidebar = document.getElementById("social-link1-sidebar")
const socialLink2Sidebar = document.getElementById("social-link2-sidebar")
const socialLink3Sidebar = document.getElementById("social-link3-sidebar")
const socialLink4Sidebar = document.getElementById("social-link4-sidebar")
const socialLinksSidebar = [socialLink1Sidebar, socialLink2Sidebar, socialLink3Sidebar, socialLink4Sidebar]



let isSidebarOpen = false;
function handleSideaBarOpen() {
  if (!isSidebarOpen) {
    socialLinksNavbar.forEach( (socialLink) => {
      socialLink.style.scale = "0"
    })
    setTimeout(() => {
      socialLinksSidebar.forEach( (socialLink) => {
        socialLink.style.scale = "1"
      })
    }, 400);
    sideBar.style.left = "0";
    isSidebarOpen = true;
  } else {
    socialLinksNavbar.forEach( (socialLink) => {
      socialLink.style.scale = "1"
    })
    socialLinksSidebar.forEach( (socialLink) => {
      socialLink.style.scale = "0"
    })
    sideBar.style.left = "-100%";
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

function themeHandler() {
  body.classList.toggle("dark-theme");
}
