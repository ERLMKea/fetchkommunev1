console.log("vi er i fetchkommuer")
const urlKommuner = "https://api.dataforsyningen.dk/kommuner"

function fetchKommuner(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

const ddKommuner = document.getElementById("ddKommuner")
function fillKommuneDropDown(kom) {
    //console.log(kom)
    const el = document.createElement("option")
    el.textContent = kom.navn
    ddKommuner.appendChild(el)
}

async function showAllKommuner() {
    const kommuneList = await fetchKommuner(urlKommuner);
    console.log(kommuneList)
    kommuneList.forEach(fillKommuneDropDown)
}

function actionShowKommuner() {
    showAllKommuner()
}

const pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('click', actionShowKommuner)

