let form = document.querySelector(".input");
let ul = document.querySelector("ul");

// event on form 
let storeData = JSON.parse(localStorage.getItem("list")) || [];

form.addEventListener("submit" , (event) => {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    storeData.push({title,category});
    localStorage.setItem("list",JSON.stringify(storeData));
    createUI(storeData);
})

// UI for notice 
function createUI(data = storeData){
    ul.innerHTML = "";
    let fragment = new DocumentFragment;

    data.forEach((notice,i) => {
        let li = document.createElement("li");
        let h2 = document.createElement("h1");
        let p =  document.createElement("p");
        h2.innerText = notice.title;
        h2.addEventListener("dblclick",(event) => {
            let input  = document.createElement("input");
            let parent = event.target.parentElement;
            parent.replaceChild(input,event.target);
            input.value = notice.title
            input.addEventListener("blur" , (event) => {
                    storeData[i].title = event.target.value;
                    localStorage.setItem("list",JSON.stringify(storeData));
                    createUI();
            });
            
        })
        p.innerText =  notice.category;
        p.addEventListener("dblclick",(event) => {
            let input  = document.createElement("input");
            let parent = event.target.parentElement;
            parent.replaceChild(input,event.target);
            input.value = notice.category;
            input.addEventListener("blur" , (event) => {
                    storeData[i].category = event.target.value;
                    localStorage.setItem("list",JSON.stringify(storeData));
                    createUI();
            })
        })
        li.append(p,h2);
        fragment.appendChild(li); 
    });
    ul.append(fragment);
};  
createUI(storeData);