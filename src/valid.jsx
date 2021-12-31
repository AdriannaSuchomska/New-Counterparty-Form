

export function validNumber() {

    if (document.getElementById('use-dropdown-Typ: ').value === "Osoba") {

        return isValidPesel();

    }
    else {

        return isValidNip();

    }
}


function isValidPesel() {

    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    let result = 0;

    let controlNumber = parseInt(document.getElementById('component-input-Pesel / NIP').value.substring(10, 11));

    for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(document.getElementById('component-input-Pesel / NIP').value.substring(i, i + 1)) * weight[i]);
    }
    sum = sum % 10;
    result = (10 - sum) % 10;
    if (result !== controlNumber) {
        return (alert("Wprowadź poprawny Pesel"))
    }
}

function isValidNip() {

    let weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    let sum = 0;
    let controlNumber = parseInt(document.getElementById('component-input-Pesel / NIP').value.substring(9, 10));
    let weightCount = weight.length;
    for (let i = 0; i < weightCount; i++) {
        sum += (parseInt(document.getElementById('component-input-Pesel / NIP').value.substr(i, 1)) * weight[i]);
    }

    if (!(sum % 11 === controlNumber)) {
        return (alert("Wprowadź poprawny NIP"))
    }
}
