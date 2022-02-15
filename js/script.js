function onClick(productId, costId, price) {
    document.getElementById(productId).addEventListener('click', function () {
        updatePrice(costId, price);
    })
}

onClick('eightGB', 'memory-cost', 0);
onClick('sixteenGB', 'memory-cost', 200);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 200);
onClick('ssd3', 'storage-cost', 400);
onClick('free-delivery', 'delivery-cost', 0);
onClick('paid-delivery', 'delivery-cost', 30);

function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalPrice = document.getElementById('total-price');

    let total = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    totalPrice.innerText = total;
}

const cuoponApplied = document.getElementById('applied-text');
const cuoponNotApplied = document.getElementById('not-applied');
cuoponApplied.style.display = 'none';
cuoponNotApplied.style.display = 'none';
const cuoponCode = 'fokirerJonnoOffer';
document.getElementById('apply-btn').addEventListener('click', function () {
    const cuopon = document.getElementById('promo-input');
    const cuoponInput = cuopon.value;
    if (cuoponCode === cuoponInput) {
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);

        const discount = (totalPrice * 25) / 100;

        totalPrice = totalPrice - discount;

        total.innerText = totalPrice;

        cuoponApplied.style.display = 'block';
        cuoponNotApplied.style.display = 'none';
    }
    else {
        cuoponApplied.style.display = 'none';
        cuoponNotApplied.style.display = 'block';
    }

    cuopon.value = '';
})