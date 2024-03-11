

function subjectOptions(){
    hiddeSecondaryMenus();
    const subjectMenu = document.getElementById("subject-menu");
    subjectMenu.style.display = 'block';
}

async function showSubjects(){
    initialState();// every innerHTML become empty
    const subjectsHTML = document.getElementById("subjects");
    subjectsHTML.innerHTML = "";// assure that is empty
    subjectsHTML.innerHTML += "<div class='h2 text-center'>subjects</div>"
    const subjects = await load("subjects");
    for(subject of subjects){
        if((subject["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            subjectsHTML.appendChild(div);
        }
        let lastRowHTML = subjectsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(subject);
        lastRowHTML.innerHTML += card;
    }
}