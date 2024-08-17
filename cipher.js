document.getElementById('encrypt').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = encrypt(inputText);
    displayOutput(encryptedText);
});

document.getElementById('decrypt').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = decrypt(inputText);
    displayOutput(decryptedText);
});

document.getElementById('copyText').addEventListener('click', function() {
    let resultText = document.getElementById('resultText').innerText;
    copyToClipboard(resultText);
});

function encrypt(text) {
    text = text.replace(/e/g, 'enter');
    text = text.replace(/i/g, 'imes');
    text = text.replace(/a/g, 'ai');
    text = text.replace(/o/g, 'ober');
    text = text.replace(/u/g, 'ufat');
    return text;
}

function decrypt(text) {
    text = text.replace(/ufat/g, 'u');
    text = text.replace(/ober/g, 'o');
    text = text.replace(/ai/g, 'a');
    text = text.replace(/imes/g, 'i');
    text = text.replace(/enter/g, 'e');
    return text;
}

function displayOutput(text) {
    let outputDiv = document.getElementById('cipherOutput');
    let resultTextDiv = document.getElementById('resultText');
    let defaultImage = document.getElementById('defaultImage');
    
    // Hide the default image and show the text result
    defaultImage.style.display = 'none';
    resultTextDiv.innerText = text;
    outputDiv.style.display = 'block';
}

function copyToClipboard(text) {
    let textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
