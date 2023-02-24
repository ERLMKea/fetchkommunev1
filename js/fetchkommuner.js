console.log("vi er i fetchkommuer")
const urlKommuner = "https://api.dataforsyningen.dk/kommuner"

function fetchKommuner(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

function showKommune(kom) {
    console.log(kom)
}

async function showAllKommuner() {
    const kommuneList = await fetchKommuner(urlKommuner);
    console.log(kommuneList)
    kommuneList.forEach(showKommune)
}

function actionShowKommuner() {
    showAllKommuner()
}

const pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('click', actionShowKommuner)

