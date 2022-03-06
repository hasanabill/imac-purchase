function subCost(cost, amount) {
    const extraCost = document.getElementById(cost + '-cost')
    extraCost.innerText = amount;

    const sumPrice = document.getElementsByClassName('prices')
    let totalCost = 0;
    for (const price of sumPrice) {
        totalCost = totalCost + parseInt(price.innerText);
    }
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;
    const grandTotalPrice = document.getElementById('grand-total-price');
    grandTotalPrice.innerText = totalCost;
}

function activeBtn(clicker, changer) {
    document.getElementById('btn-' + clicker).classList.add('border-dark');
    document.getElementById('btn-' + changer).classList.remove('border-dark');
}

// event handler
document.getElementById('btn-8gb').addEventListener('click', function () {
    subCost('memory', 00);
    activeBtn('8gb', '16gb');
})
document.getElementById('btn-16gb').addEventListener('click', function () {
    subCost('memory', '200');
    activeBtn('16gb', '8gb');
})
document.getElementById('btn-256gb').addEventListener('click', function () {
    subCost('storage', 00);
    this.classList.add('border-dark');
    document.getElementById('btn-512gb').classList.remove('border-dark');
    document.getElementById('btn-1tb').classList.remove('border-dark');
})
document.getElementById('btn-512gb').addEventListener('click', function () {
    subCost('storage', 200);
    this.classList.add('border-dark');
    document.getElementById('btn-256gb').classList.remove('border-dark');
    document.getElementById('btn-1tb').classList.remove('border-dark');
})
document.getElementById('btn-1tb').addEventListener('click', function () {
    subCost('storage', 400);
    this.classList.add('border-dark');
    document.getElementById('btn-512gb').classList.remove('border-dark');
    document.getElementById('btn-256gb').classList.remove('border-dark');
})
document.getElementById('btn-free-delivery').addEventListener('click', function () {
    subCost('delivery', 00);
    activeBtn('free-delivery', '20-delivery');

})
document.getElementById('btn-20-delivery').addEventListener('click', function () {
    subCost('delivery', 20);
    activeBtn('20-delivery', 'free-delivery');

})