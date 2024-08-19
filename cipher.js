// Event listeners for Encrypt, Decrypt and Copy buttons
document.getElementById('encrypt').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let lowercaseText = validateAndConvert(inputText);
    let encryptedText = encrypt(lowercaseText);
    displayOutput(encryptedText);
});

document.getElementById('decrypt').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let lowercaseText = validateAndConvert(inputText);
    let decryptedText = decrypt(lowercaseText);
    displayOutput(decryptedText);
});

document.getElementById('copyText').addEventListener('click', function() {
    let resultText = document.getElementById('resultText').innerText;
    copyToClipboard(resultText);
});

document.getElementById('logoReset').addEventListener('click', function() {
    // clear the content of the textarea
    document.getElementById('inputText').value = '';
    
    // reload the page
    location.reload();
});

// Validate and convert input to lowercase
function validateAndConvert(text) {
    let warningMessage = document.getElementById('warningMessage');
    
    if (text !== text.toLowerCase()) {
        warningMessage.innerText = "only lowercase letters are allowed, your input has been converted to lowercase :)";
        warningMessage.style.display = 'block'; // Ensure the message is visible
    } else {
        warningMessage.innerText = ""; // Clear the message if no uppercase is found
        warningMessage.style.display = 'none'; // Hide the message if unnecessary
    }
    return text.toLowerCase();
}

// Encrypt function using regex with callback
function encrypt(text) {
    const encryptions = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[eioua]/g, match => encryptions[match]);
}

// Decrypt function using regex with callback
function decrypt(text) {
    const decryptions = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptions[match]);
}

// Update the UI to show the result of the encryption or decryption
function displayOutput(text) {
    let defaultMessage = document.getElementById('defaultMessage');
    let resultContainer = document.getElementById('resultContainer');
    let resultTextDiv = document.getElementById('resultText');
    
    // Hide the default message and show the result container
    defaultMessage.style.display = 'none';
    resultTextDiv.innerText = text;
    resultContainer.style.display = 'flex';
}

// Copy the result text to the clipboard when the user clicks the "copy" button
function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
