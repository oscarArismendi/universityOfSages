

async function showPeriods(){
    const periodsHTML = document.getElementById("periods");
    periodsHTML.innerHTML = "";// assure that is empty
    periodsHTML.innerHTML += "<div class='h2 text-center'>Periods</div>"
    const periods = await load("periods");
    for(period of periods){
        if((period["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            periodsHTML.appendChild(div);
        }
        const lastRowHTML = periodsHTML.querySelector(":last-child");
        const card = `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">ID: ${period["id"]}</h5>
                        <ul class="list-group">
                            <li class="list-group-item">Code: ${period["code"]}</li>
                            <li class="list-group-item">Year: ${period["year"]}</li>
                            <li class="list-group-item">Semester: ${period["semester"]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        lastRowHTML.innerHTML += card;
    }
}