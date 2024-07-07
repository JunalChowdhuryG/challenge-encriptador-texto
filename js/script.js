function encryptText() {
    let text = document.getElementById("inputText").value;
    //const lowercaseOnly = document.getElementById("lowercaseOnly").checked;

    text = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");


    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    let text = document.getElementById("inputText").value;

    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}

function copyText() {
    const text = document.getElementById("outputText");
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");
    //alert("Texto copiado: " + text.value);
}
