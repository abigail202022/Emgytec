render();

//Automatizacion
const btnAuto_industrial = document.getElementById("auto_industrial");
const btnControl = document.getElementById("control");
const btnInstrumentacion = document.getElementById("instrumentacion");
const btnIndustria = document.getElementById("industria");
const btnScada = document.getElementById("scada");

btnAuto_industrial.addEventListener('click', hideTabs)
btnControl.addEventListener('click', hideTabs)
btnInstrumentacion.addEventListener('click', hideTabs)
btnIndustria.addEventListener('click', hideTabs)
btnScada.addEventListener('click', hideTabs)

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