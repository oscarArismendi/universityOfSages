


// json functions
async function load(url){
    try{
        let returnList = [];
        const response = await fetch(`http://localhost:3000/${url}`);
        if(!response.ok){
            throw new Error(`Error to load ${url} state:`,response.status);
        }
        returnList = await response.json();
        return returnList;
    }catch(error){
        console.error(`error to load the ${url}`,error.message);
    }
}



//html functions

function createCard(dataDic){//pass a dictionary to a card
    let cardHTMl = `
    <div class="col">
        <div class="card">
            <div class="card-body">
                
    `;

    for(let key in dataDic){
        if(key === "id"){
            cardHTMl += `<h5 class="card-title">ID: ${dataDic["id"]}</h5>
            <ul class="list-group">`;
        }
        else{
            cardHTMl += `<li class="list-group-item">${key.replace("_"," ")}: ${dataDic[key]}</li>`;
        }
    }

    cardHTMl += `
                </ul>
            </div>
        </div>
    </div>
    `;
    return cardHTMl;
}

function hiddeSecondaryMenus(){
    const teacherMenu = document.getElementById("teacher-menu");
    teacherMenu.style.display = "none";
}

function initialState(){
    hiddeSecondaryMenus();//make sure to hidde the secundary menus
    const container = document.getElementById("main-container");
    const divs = container.getElementsByTagName("div");
    for(let i = 0; i < divs.length; i++){
        divs[i].innerHTML = "";
    }
}

