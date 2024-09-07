"use strict";
//Toggle Button Handling
const summary = document.querySelector(".summary");
const summaryBtn = document.querySelector(".summarybtn");
const skills = document.querySelector(".skills");
const skillsBtn = document.querySelector(".skillsbtn");
const experience = document.querySelector(".experience");
const experienceBtn = document.querySelector(".experiencebtn");
const education = document.querySelector(".education");
const educationBtn = document.querySelector(".educationbtn");
const project = document.querySelector(".projects");
const projectBtn = document.querySelector(".projectbtn");
//toggle the summary button
summaryBtn.addEventListener("click", () => {
    summary.classList.toggle("hidden");
    console.log("hii");
});
//toggle the summary button
skillsBtn.addEventListener("click", () => {
    skills.classList.toggle("hidden");
    console.log("hii");
});
//toggle the summary button
experienceBtn.addEventListener("click", () => {
    experience.classList.toggle("hidden");
    console.log("hii");
});
//toggle the summary button
educationBtn.addEventListener("click", () => {
    education.classList.toggle("hidden");
    console.log("hii");
});
projectBtn.addEventListener("click", () => {
    project.classList.toggle("hidden");
    console.log("hii");
});
