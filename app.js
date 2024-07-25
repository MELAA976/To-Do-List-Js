// recuperer les element du formulaire 
//selection de btn



item = 0
btnAdd = document.querySelector(".btnAdd"), // btn ajout element
ulElem = document.querySelector("#ulItem") //mon ul
console.log(ulElem);


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
    console.log(form);
    form.value = "" //vider le formulaire

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
        //liElem.remove()
    })

    //btn valider
    let nwBtnVal = document.createElement("button");
    nwBtnVal.setAttribute("class", "btn btn-success");
    nwBtnVal.textContent = "valider";
    liElem.appendChild(nwBtnVal);

    nwBtnVal.addEventListener('click', ()=>{
        console.log(event.target)//à partir du bouton qu'on récupère ici, on peut remonter au parent
        console.log(nwBtnVal.parentNode);
        nwBtnVal.parentNode.style.textDecoration = "line-through";
    });

    //modifier
    let btnModi = document.createElement("button");
    btnModi.setAttribute("class", "btn btn-outline-primary");
    btnModi.textContent = "Modifier";
    liElem.appendChild(btnModi)

    btnModi.addEventListener('click', () =>{
        console.log(event.target)
        console.log(btnModi.parentNode.childNodes);
        btnModi.remove()
        let inputChang = document.createElement("input");
        let btnChang = document.createElement("button");
        btnChang.textContent = "valider";
        liElem.appendChild(btnChang);
        liElem.appendChild(inputChang);
        btnChang.addEventListener('click', () =>{
            console.log("Bonjour");
        }
        )
        
    } )


}
)





