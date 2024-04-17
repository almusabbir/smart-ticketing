var arr = [];

function seatClicked(id) {
    var remainingSeats = document.getElementById('fourty');
    var remainingSeatsValue = remainingSeats.innerText;
    remainingSeatsValue = parseInt(remainingSeatsValue);
    
    if(arr.includes(id) === true) {
        alert("Already Selected!");
    }
    else if (remainingSeatsValue === 0) {
        alert("No Seat Available!");
    }
    else if (arr.length === 4) {
        alert("More than 4 seats cannot be selected at a time!");
    }
    else {
        const seatId = document.getElementById(id);
        seatId.style.backgroundColor = "#1DD100";
        seatId.style.color = "white";

        arr.push(id);
    
        remainingSeatsValue = remainingSeatsValue - 1;
        remainingSeats.innerText = remainingSeatsValue;

        let selectedSeats = document.getElementById('total-selected-seats');
        let selectedSeatsValue = selectedSeats.innerText;
        selectedSeatsValue = parseInt(selectedSeatsValue);
        selectedSeatsValue = selectedSeatsValue + 1;
        selectedSeats.innerText = selectedSeatsValue;

        let totalPrice = document.getElementById('total-price');
        let totalPriceValue = totalPrice.innerText;
        totalPriceValue = parseInt(totalPriceValue);
        totalPriceValue = totalPriceValue + 550;
        totalPrice.innerText = totalPriceValue;

        const ticketContainer = document.getElementById('ticket-container');
        const ticketDiv = document.createElement('div');
        ticketDiv.classList.add('flex');
        ticketDiv.classList.add('justify-between');
        ticketDiv.classList.add('mt-2');
        ticketContainer.appendChild(ticketDiv);

        const ticket = document.createElement('p');
        ticket.innerText = id;
        ticketDiv.appendChild(ticket);

        const ticketClass = document.createElement('p');
        ticketClass.innerText = "Economy";
        ticketDiv.appendChild(ticketClass);

        const ticketPrice = document.createElement('p');
        ticketPrice.innerText = "550";
        ticketDiv.appendChild(ticketPrice);

        if(arr.length === 4) {
            const applyButton = document.getElementById('apply');
            applyButton.removeAttribute('disabled');
        }

        let grandTotalPrice = document.getElementById('total-price');
        let grandTotalPriceValue = grandTotalPrice.innerText;
        grandTotalPrice = document.getElementById('grand-total');
        grandTotalPrice.innerText = grandTotalPriceValue;
    }
}

function discount() {
    let couponInputField = document.getElementById('coupon-input');
    let couponInputFieldValue = couponInputField.value;

    var discount = 0;

    if(couponInputFieldValue === "NEW15") {
        discount = 15;
    }
    else if(couponInputFieldValue === "Couple20") {
        discount = 20;
    }
    else {
        alert("Invalid Coupon!");
    }

    let grandTotalPrice = document.getElementById('total-price');
    let grandTotalPriceValue = grandTotalPrice.innerText;
    grandTotalPriceValue = parseFloat(grandTotalPriceValue);
    let discountAmount = grandTotalPriceValue * discount/100;

    if(discountAmount !== 0) {
        const discountContainer = document.getElementById('discount-container');
        const discountElement = document.createElement('p');
        discountElement.innerText = "Discount";
        discountContainer.appendChild(discountElement);

        const discountElementAmount = document.createElement('p');
        discountElementAmount.innerText = "BDT " + discountAmount;
        discountContainer.appendChild(discountElementAmount);

        const applyButton = document.getElementById('apply-button');
		applyButton.style.display = 'none';
    }

    grandTotalPriceValue = grandTotalPriceValue - discountAmount;
    grandTotalPrice = document.getElementById('grand-total');
    grandTotalPrice.innerText = grandTotalPriceValue;
}