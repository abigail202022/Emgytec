render();

//Energia
const btnPanel = document.getElementById("panel");
const btnEolica = document.getElementById("eolica");
const btnRespaldo = document.getElementById("respaldo");
const btnElectrogeno = document.getElementById("electrogeno");

btnPanel.addEventListener('click', hideTabs)
btnEolica.addEventListener('click', hideTabs)
btnRespaldo.addEventListener('click', hideTabs)
btnElectrogeno.addEventListener('click', hideTabs)


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