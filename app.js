//To catch the error in heading section because heading section is not present in each page of an html document

try{
const heading = document.querySelector("#h1");
heading.innerText = "Hello";

const about= document.querySelector("h5");
about.innerText ="A bit about me!!!";

const summary = document.querySelector("p");
summary.innerText ="Experienced System Administrator with a robust background in IT operations, network management, and technical support. Proficient in monitoring system performance, maintaining hardware assets, and ensuring compliance with security protocols. Skilled in HTML, CSS, JavaScript, and React.js, with a keen interest in front-end and full-stack web development. Eager to leverage strong problem-solving abilities and IT expertise to pivot into a dynamic role in web development and contribute to innovative projects."



}catch(error){
    console.log(error.heading);
}

const resume = document.querySelector(".resume1");
resume.innerText="Resume";

const Project = document.querySelector(".project1");
Project.innerText = "Project"

const Contact = document.querySelector(".contact1");
Contact.innerText = "Contact"

//When click on resume ---> will navigate to the resume page
let resume1 = document.getElementsByClassName("resume1");

for (i = 0; i < resume1.length; i++) {

    resume1[i].addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = "http://127.0.0.1:5500/resume.html";

    }
    )
}

let project1 = document.getElementsByClassName("project1");

for (i = 0; i < project1.length; i++) {

    project1[i].addEventListener('click', function (e) {
        e.preventDefault();

        window.location.href = "http://127.0.0.1:5500/project.html";
        
    }
    )
}


let Contact1 = document.getElementsByClassName("contact1");

for (i = 0; i < Contact1.length; i++) {

    Contact1[i].addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href= "http://127.0.0.1:5500/contact.html";

    }
    )
}

//Form Page




//Submit Button

const btn = document.querySelector(".btn");

btn.addEventListener('mouseover', function(){
    btn.style.backgroundColor = 'white';
    btn.style.color= 'black';
    btn.style.fontSize= '22px';
    btn.style.border = '1px solid black';
    btn.style.cursor ='pointer';
})

btn.addEventListener('mouseout', function(){
    btn.style.backgroundColor='';
    btn.style.fontSize= '';

})

const msg = document.querySelector(".successful");



const contactForm = document.getElementById('contactForm');
const successful = document.getElementById('successful');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(contactForm);

    setTimeout(function() {
        // Display success message
        successful.textContent = 'Message sent successfully!';
        // Optionally, clear the message after a delay
        setTimeout(function() {
            successful.textContent = '';
        }, 3000); // Clear message after 3 seconds
    }, 1000); //
});


