
function tuitionOptions(){
    hiddeSecondaryMenus();
    const tuitionMenu = document.getElementById("tuition-menu");
    tuitionMenu.style.display = 'block';
}

async function showTuitions(){
    initialState();// every innerHTML become empty
    const tuitionsHTML = document.getElementById("tuitions");
    tuitionsHTML.innerHTML = "";// assure that is empty
    tuitionsHTML.innerHTML += "<div class='h2 text-center'>tuitions</div>"
    const tuitions = await load("tuitions");
    for(tuition of tuitions){
        if((tuition["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            tuitionsHTML.appendChild(div);
        }
        let lastRowHTML = tuitionsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(tuition);
        lastRowHTML.innerHTML += card;
    }
}