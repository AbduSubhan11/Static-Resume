//Toggle Button Handling

const summary = document.querySelector(".summary") as HTMLDivElement
const summaryBtn = document.querySelector(".summarybtn") as HTMLButtonElement
const skills = document.querySelector(".skills") as HTMLDivElement
const skillsBtn = document.querySelector(".skillsbtn") as HTMLButtonElement
const experience = document.querySelector(".experience") as HTMLDivElement
const experienceBtn = document.querySelector(".experiencebtn") as HTMLButtonElement
const education = document.querySelector(".education") as HTMLDivElement
const educationBtn = document.querySelector(".educationbtn") as HTMLButtonElement
const project = document.querySelector(".projects") as HTMLDivElement
const projectBtn = document.querySelector(".projectbtn") as HTMLButtonElement

//toggle the summary button
summaryBtn.addEventListener("click",()=>{
    summary.classList.toggle("hidden")
    console.log("hii");
    
})

//toggle the summary button
skillsBtn.addEventListener("click",()=>{
    skills.classList.toggle("hidden")
    console.log("hii");
    
})

//toggle the summary button
experienceBtn.addEventListener("click",()=>{
    experience.classList.toggle("hidden")
    console.log("hii");
    
})

//toggle the summary button
educationBtn.addEventListener("click",()=>{
    education.classList.toggle("hidden")
    console.log("hii");
})
    
projectBtn.addEventListener("click",()=>{
    project.classList.toggle("hidden")
    console.log("hii");
})
    
