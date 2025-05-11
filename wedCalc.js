const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2, // always show 2 decimal places
        maximumFractionDigits: 2, // even for round numbers like 1000
});

function CalculateTotal() {

    const perPerson     = document.querySelector('#perPerson');
    const venuePer        = document.querySelector('#venuePer');
    const foodPer        = document.querySelector('#foodPer');
    const drinkPer        = document.querySelector('#drinkPer');
    const taxPer        = document.querySelector('#taxPer');
    const gratPer        = document.querySelector('#gratPer');
    const spacer        = document.querySelector('#spacer');
    const total        = document.querySelector('#total');
    const totalNoExtra        = document.querySelector('#totalNoExtra');

    const people  = parseFloat(document.getElementById('people').value);
    const venue  = parseFloat(document.getElementById('venue').value);
    const food  = parseFloat(document.getElementById('food').value);
    const drink  = parseFloat(document.getElementById('drink').value);

    const resultsContainer = document.querySelector('.results-container');
    resultsContainer.classList.remove('hidden');


    let venuePrice = venue / people;
    let foodPrice = CalcTotal(people,food);
    let drinkPrice = CalcTotal(people,drink);
    let taxPrice = GratuityOrTipPerPerson(foodPrice+drinkPrice,6);
    let gratPrice = GratuityOrTipPerPerson(foodPrice+drinkPrice,18);

    let totalPrice = venue + foodPrice + drinkPrice + taxPrice + gratPrice;
    let totalPricePer = totalPrice / people;
    let totalNoExtraPrice = foodPrice + drinkPrice + taxPrice + gratPrice;

    venuePer.innerHTML = `Total Venue Price per Person: ${formatter.format(venuePrice)}`;
    foodPer.innerHTML = `Total Food Price: ${formatter.format(foodPrice)}`;
    drinkPer.innerHTML = `Total Drink Price: ${formatter.format(drinkPrice)}`;
    taxPer.innerHTML = `Total Tax: ${formatter.format(taxPrice)}`;
    gratPer.innerHTML = `Total Gratuity: ${formatter.format(gratPrice)}`;
    spacer.innerHTML = `---------------------------------------`;
    total.innerHTML = `Total Price: ${formatter.format(totalPrice)}`;
    totalNoExtra.innerHTML = `Total Price without Venue Fee: ${formatter.format(totalNoExtraPrice)}`;
    perPerson.innerHTML = `Total Price per Person: ${formatter.format(totalPricePer)}`;


}

function CalcTotal(personCount,price) {
    return price * personCount;
}

function GratuityOrTipPerPerson(price, percent) {
    return price * (percent / 100);
}



