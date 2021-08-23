// taking the value and show tham on place and call total balance function
function prizeAmount(itemName, prize) {
  const prevItemText = document.getElementById(itemName);
  const defualtCapacityPrize = prize;
  prevItemText.innerText = defualtCapacityPrize;
  totalBalance();
}

// function for don't repeat code on total balance
function getInputValue(inputId) {
  const inputSectiontext = document.getElementById(inputId);
  const inputSectionAmount = parseInt(inputSectiontext.innerText);
  return inputSectionAmount;
}

// calculating total balance
function totalBalance() {
  const bestPrize = getInputValue('best-prize');
  const extraMemoryCost = getInputValue('memory-cost');
  const extraStorageCost = getInputValue('storage-cost');
  const deliveryCharge = getInputValue('delivery-charge');
  const total = bestPrize + extraMemoryCost + extraStorageCost + deliveryCharge;
  const totalText = document.getElementById('total');
  const totalAmount = parseInt(totalText.innerText);
  totalText.innerText = total;

  // footer total amount update
  const footerTotalText = document.getElementById('total-balance');
  const footerTotalAmount = parseInt(footerTotalText.innerText);
  footerTotalText.innerText = total;
}

document.getElementById('memory-capacity-8gb').addEventListener('click', function () {
  prizeAmount('memory-cost', 0);
});

document.getElementById('memory-capacity-16gb').addEventListener('click', function () {
  prizeAmount('memory-cost', 180);
});

document.getElementById('storage-256gb').addEventListener('click', function () {
  prizeAmount('storage-cost', 0);
});

document.getElementById('storage-512gb').addEventListener('click', function () {
  prizeAmount('storage-cost', 100);
});

document.getElementById('storage-1tb').addEventListener('click', function () {
  prizeAmount('storage-cost', 180);
});

document.getElementById('normal-delivery').addEventListener('click', function () {
  prizeAmount('delivery-charge', 0);
});

document.getElementById('express-delivery').addEventListener('click', function () {
  prizeAmount('delivery-charge', 20);
});

//work on apply button for bonus
document.getElementById('apply-btn').addEventListener('click', function () {
  const applyInputText = document.getElementById('apply-field');
  const applyInputAmount = applyInputText.value;
  if (applyInputAmount == 'stevekaku') {
    const totalAmount = getInputValue('total');
    const footerTotalText = document.getElementById('total-balance');
    const twentyPercent = (totalAmount / 100)* 20;
    const afterDiscount = totalAmount - twentyPercent;
    footerTotalText.innerText = afterDiscount;
  } else {
    console.log('wrong promo code');
  }
  applyInputText.value = '';
});
