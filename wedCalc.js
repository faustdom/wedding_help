function CalculateTotal() {

    const perPerson     = document.querySelector('#perPerson');
    const venuePer        = document.querySelector('#venuePer');
    const foodPer        = document.querySelector('#foodPer');
    const drinkPer        = document.querySelector('#drinkPer');
    const taxPer        = document.querySelector('#taxPer');
    const gratPer        = document.querySelector('#gratPer');
    const spacer        = document.querySelector('#spacer');

    const people  = parseFloat(document.getElementById('people').value);
    const venue  = parseFloat(document.getElementById('venue').value);
    const food  = parseFloat(document.getElementById('food').value);
    const drink  = parseFloat(document.getElementById('drink').value);
    const tax  = parseFloat(document.getElementById('tax').value);
    const grat  = parseFloat(document.getElementById('grat').value);

    const resultsContainer = document.querySelector('.results-container');
    resultsContainer.classList.remove('hidden');


    let venuePrice = CalculatePerPerson(people,venue);
    let foodPrice = CalculatePerPerson(people,food);
    let drinkPrice = CalculatePerPerson(people,drink);
    let taxPrice = CalculatePerPerson(people,tax);
    let gratPrice = CalculatePerPerson(people,grat);

    let totalPrice = venuePrice + foodPrice + drinkPrice + taxPrice + gratPrice;

    venuePer.innerHTML = `Total Venue Price per Person: $${venuePrice}`;
    foodPer.innerHTML = `Total Food Price per Person: $${foodPrice}`;
    drinkPer.innerHTML = `Total Drink Price per Person: $${drinkPrice}`;
    taxPer.innerHTML = `Total Tax Price per Person: $${taxPrice}`;
    gratPer.innerHTML = `Total Gratuity Price per Person: $${gratPrice}`;
    spacer.innerHTML = `---------------------------------------`;
    perPerson.innerHTML = `Total Price per Person: $${totalPrice}`;


}

function CalculatePerPerson(personCount,price) {
    return price / personCount;
}



