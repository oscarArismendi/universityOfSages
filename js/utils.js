
function preventReloadForm(){
    document.querySelector("form").addEventListener("submit",function(event){
        event.preventDefault();
    })
};


// json functions
async function load(url){//'profesores'
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

async function save(newUser,url){
    try{
        const response = await fetch(`http://localhost:3000/${url}`,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(newUser)
        });
        if(!response.ok){
            throw new Error(`Error to load ${url}. state:`,response.status);
        }
        const createdUser = await response.json();
        console.log("created ${url}:",createdUser);
    }catch(error){
        console.error(`error to load the ${url}`,error.message);
    }
}



//html functions

function createPersonForm(dataDic,name){
    let formHTMl = `
    <form class="align-items-center">
    `;

    for(let key in dataDic){
        if(key !=="id"){
            formHTMl += `
            <div class="form-group">
                <label for="${name}-${key}-input">${key.replaceAll("_"," ")}</label> 
                <textarea class="form-control" id="${name}-${key}-input" rows="1"></textarea>
            </div>`;
        }
    }
    formHTMl += `
    <button type="button" class="btn btn-primary mt-2" onClick="add${name}(e)">Add ${name}</button>
    </form>
    `;
    return formHTMl;
}

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
            cardHTMl += `<li class="list-group-item">${key.replaceAll("_"," ")}: ${dataDic[key]}</li>`;
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
    const studentMenu = document.getElementById("student-menu");
    teacherMenu.style.display = "none";
    studentMenu.style.display = "none";
}

function initialState(){
    hiddeSecondaryMenus();//make sure to hidde the secundary menus
    const container = document.getElementById("main-container");
    const divs = container.getElementsByTagName("div");
    for(let i = 0; i < divs.length; i++){
        divs[i].innerHTML = "";
    }
}

