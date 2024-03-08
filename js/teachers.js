

function teacherOptions(){
    hiddeSecondaryMenus();
    const navTeachers = document.getElementById('nav-teachers');
    const teacherMenu = document.getElementById("teacher-menu");
    teacherMenu.style.display = 'block';
}

async function showTeachers(){
    initialState();// every innerHTML become empty
    const teachersHTML = document.getElementById("teachers");
    teachersHTML.innerHTML = "";// assure that is empty
    teachersHTML.innerHTML += "<div class='h2 text-center'>teachers</div>"
    const teachers = await load("teachers");
    for(teacher of teachers){
        if((teacher["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            teachersHTML.appendChild(div);
        }
        let lastRowHTML = teachersHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(teacher);
        lastRowHTML.innerHTML += card;
    }
}

async function newTeacher(){
    console.log("hola");
}