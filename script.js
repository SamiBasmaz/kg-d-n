const kiloInput = document.querySelector("#kiloInput");
const select = document.querySelector("select");
const btnHesapla = document.querySelector("#btnHesapla");
const img = document.querySelector("#for-img");
const sonuc = document.querySelector("#sonuc");



const hesapla = () => {
    let kilo = Number(kiloInput.value);
    kilo = (kilo / 9.81)

    let gezegen = select.value

    if(kiloInput.value != "" && select.value != "Bir seçim yapınız..."){
        if(gezegen == "Dünya"){
            img.setAttribute("src", "images/earth.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığını : ${(kilo * 9.81).toFixed(2)}kg`  
        }else if(gezegen == "Jüpiter"){
            img.setAttribute("src", "images/jupiter.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığını : ${(kilo * 9.81).toFixed(2)}kg`
        }
    }
}

btnHesapla.addEventListener("click", hesapla);