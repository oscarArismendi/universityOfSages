

async function showPeriods(){
    const periodsHTML = document.getElementById("periods");
    periodsHTML.innerHTML = "";// assure that is empty
    periodsHTML.innerHTML += "<div class='h2 text-center'>Academic Periods</div>"
    const periods = await load("periods");
    for(period of periods){
        if((period["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            periodsHTML.appendChild(div);
        }
        const lastRowHTML = periodsHTML.querySelector(":last-child");
        const card = createCard(period);
        lastRowHTML.innerHTML += card;
    }
}