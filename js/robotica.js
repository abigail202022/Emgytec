render();

//Robotica
const btnPanel = document.getElementById("");
const btnEolica = document.getElementById("");
const btnRespaldo = document.getElementById("");
const btnElectrogeno = document.getElementById("");

btnPanel.addEventListener('click', hideTabs)
btnEolica.addEventListener('click', hideTabs)
btnRespaldo.addEventListener('click', hideTabs)
btnElectrogeno.addEventListener('click', hideTabs)


function hideTabs() {
    const attribute = this.getAttribute("id");
    const tabs = document.querySelectorAll(".tab");
    for(let i = 0; i<tabs.length; i++){
        tabs[i].classList.add("hide_tab")
    }
    const thisTab = document.getElementById(`tab_${attribute}`);
    thisTab.classList.remove("hide_tab");
};

function hideTabs() {
    const attribute = this.getAttribute("id");
    firstTab(attribute);
};

function firstTab(key){
    const tabs = document.querySelectorAll(".tab");
    for(let i = 0; i<tabs.length; i++){
        tabs[i].classList.add("hide_tab")
    }
    const thisTab = document.getElementById(`tab_${key}`);
    thisTab.classList.remove("hide_tab");
}

function render(){
    const attribute = localStorage.getItem("valor")
    firstTab(attribute)
}