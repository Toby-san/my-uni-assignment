function adjustValue(id, step) {
    const input = document.getElementById(id);
    let value = parseFloat(input.value) || 0;
    value += step;
    if (value < 0) value = 0;
    input.value = value.toFixed(2);
}

function calculateChange() {
    let price = parseFloat(document.getElementById("price").value);
    let paid = parseFloat(document.getElementById("paid").value);
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (isNaN(price) || isNaN(paid)) {
        resultDiv.innerHTML = "<p>Please enter valid numbers.</p>";
        return;
    }

    if (paid < price) {
        resultDiv.innerHTML = "<p>Amount paid is less than the price!</p>";
        return;
    }

    let change = paid - price;
    resultDiv.innerHTML += `<p>Total Change: ฿${change.toFixed(2)}</p>`;

    let notes = [1000, 500, 100, 50, 20];
    let coins = [10, 5, 2, 1, 0.5, 0.25];

    for (let i = 0; i < notes.length; i++) {
        let count = Math.floor(change / notes[i]);
        if (count > 0) {
            resultDiv.innerHTML += `<p>${count} x ฿${notes[i]}</p>`;
            change -= notes[i] * count;
        }
    }

    for (let j = 0; j < coins.length; j++) {
        let count = Math.floor(change / coins[j]);
        if (count > 0) {
            resultDiv.innerHTML += `<p>${count} x ฿${coins[j].toFixed(2)} coin</p>`;
            change -= coins[j] * count;
            change = parseFloat(change.toFixed(2));
        }
    }
}

function resetCalculator() {
    document.getElementById("price").value = "0.00";
    document.getElementById("paid").value = "0.00";
    document.getElementById("result").innerHTML = "";
}
