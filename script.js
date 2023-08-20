"use strict";

const dropdownLinks = document.querySelectorAll(".dropdown");
const menuOpener = document.querySelector("#open");
const menuCloser = document.querySelector("#close");
const mobList = document.querySelector(".mob-list");

[...dropdownLinks].forEach((link) => {
    if (window.innerWidth > 800) {
        link.addEventListener("mouseenter", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.add("show");
        });

        link.addEventListener("mouseleave", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.remove("show");
        });
    } else {
        link.querySelector(".link").addEventListener("click", (e) => {
            e.preventDefault();
        });

        link.addEventListener("click", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.toggle("show");
        });
    }
});
menuOpener.addEventListener("click", () => {
    mobList.classList.add("show");
    document.body.style.overflow = "hidden";
    menuCloser.classList.add("show");
    menuOpener.classList.remove("show");
});
menuCloser.addEventListener("click", () => {
    mobList.classList.remove("show");
    document.body.style.overflow = "visible";
    menuCloser.classList.remove("show");
    menuOpener.classList.add("show");
});


function showAuto() {
    document.getElementById("auto").innerHTML = " <h1> Our Mission <br> Statement</h1> <p>To create a happy secure and stimulating learning environment in which all members of the school community can grow in self esteem and develop their potentials.</p>";
  }
  function showOrder() {
    document.getElementById("auto").innerHTML = "<h1> School's <br>History </h1> <p>The school began as a summer coaching centre with few students the performance of students in the summer coaching was overwhelming. This encourage us and the Reufort College was born. The school has become the best in a academics and Co Curriculum activities in the neighborhood, the only private school that gives scholarship award to the indigenes and best students of the school. It corporate social responsibilities also extended to ensuring road leading to the community is accessible to all road user during the raining season.</p> ";
  }
  function showToken() {
    document.getElementById("auto").innerHTML = "<h1> Future Plans <br> for the School</h1> <p>Equipping the school with the state of the art facilities kick off the boarding school soonest. To become a centre for international examinations so as to make it one of the competative schools of international standard.</p>"
  }
  function showLaunchpad() {
    document.getElementById("auto").innerHTML = "<h1>Subjects <br> Offered</h1> <p>Mathematics, English Language, Chemistry, Biology, Physics, Economics, Yoruba, Literature in English, Commerce, Data Processing, Cultural and Creative, Pre Vocational Studies, Basic Science and Technology, French, Religion and National Values Education</P>"
  }