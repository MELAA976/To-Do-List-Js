// recuperer les element du formulaire 
//selection de btn

item = 0
btnAdd = document.querySelector(".btnAdd"), // btn ajout element
ulElem = document.querySelector("#ulItem") //mon ul

// recuperer les elements du formulaire 
btnAdd.addEventListener("click", ()=> {

    //creation des elements li
    let form = document.querySelector("#itemAdd") //Zone de saissie

    liElem = document.createElement("li"); //cree l'element li
    liElem.setAttribute("id", `item${item += 1}`);// cree l'id de l'element de la liste
    liElem.setAttribute("class", "list-group-item")
    ulElem.appendChild(liElem) //ajouter les elements dans mon ul

    //Ajouter un element txt
    liElem.textContent = form.value//du text
    form.value = "" //vider le formulaire
    console.log(liElem);

    //btn supprimer
    let nwBtnSup = document.createElement("button");
    nwBtnSup.setAttribute("class", "btn btn-danger");
    nwBtnSup.textContent = "supprimer";
    liElem.appendChild(nwBtnSup)

    //supprimer l'element avec le btn supprimer 
    nwBtnSup.addEventListener('click', ()=>{
        console.log(event.target)//à partir du bouton qu'on récupère ici, on peut remonter au parent
        console.log(nwBtnSup.parentNode);
        nwBtnSup.parentNode.remove()
    })

    //btn valider
    let nwBtnVal = document.createElement("button");
    nwBtnVal.setAttribute("class", "btn btn-success");
    nwBtnVal.textContent = "valider";
    liElem.appendChild(nwBtnVal);

    nwBtnVal.addEventListener('click', ()=>{
        console.log(event.target)//à partir du bouton qu'on récupère ici, on peut remonter au parent
        console.log(liElem.childNodes[0]);
        //liElem.childNodes[0].style.textDecoration = "line-through";
        let task = nwBtnVal.parentNode;
        task.style.textDecoration = "line-through";
    });

    //modifier
    let btnModi = document.createElement("button");
    btnModi.setAttribute("class", "btn btn-outline-primary");
    btnModi.textContent = "Modifier";
    liElem.appendChild(btnModi);

    //boutton modifier
    btnModi.addEventListener('click', () =>{
        console.log(event.target.parentNode);
        btnModi.style.display = "none";
        let inputChang = document.createElement("input");
        let btnChang = document.createElement("button");
        btnChang.textContent = "Modifier";
        btnModi.parentNode.appendChild(btnChang);
        btnModi.parentNode.appendChild(inputChang);
        
        //boutton valider modification
        btnChang.addEventListener('click', () =>{
            console.log(inputChang.value);
            btnModi.parentNode.childNodes[0].textContent = inputChang.value;
            console.log(btnModi);
            inputChang.style.display = "none";
            btnChang.style.display = "none";
            //btnModi.style.display = "inline";
            //console.log(btnModi.parentNode.childNodes[2]);
            //btnModi.parentNode.childNodes[3].style.textDecoration = "none";
        }
        )
        
    } )
}
)





