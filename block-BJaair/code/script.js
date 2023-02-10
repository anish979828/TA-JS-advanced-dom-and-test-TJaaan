let form = document.querySelector(".input");
let ul = document.querySelector("ul");

// evnet on form 
let storeData = [];

form.addEventListener("submit" , (event) => {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    storeData.push({title,category});
    createUI(storeData);
})

// UI for notice 
function createUI(data){
    let fragment = new DocumentFragment;

    data.forEach(notice => {
        let li = document.createElement("li");
        let h2 = document.createElement("h1");
        let p =  document.createElement("p");
        h2.innerText = notice.title;
        p.innerText =  notice.category;
        li.append(p,h2);
        fragment.appendChild(li); 
    });
    ul.append(fragment);
};  
