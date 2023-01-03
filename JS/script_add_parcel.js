

function show(){
    document.getElementById('add_info').style.display="inline";
    document.getElementById('add_parcel').style.display="none";
}

function hide(){
    document.getElementById('add_info').style.display="none";
    document.getElementById('add_parcel').style.display="inline";
}


window.onload = function() {
    // Clear local storage
    localStorage.clear();

    // Retrieve data from local storage
    var retrieved_data = JSON.parse(localStorage.getItem("data")) || [];

    // Clear the table body
    document.getElementById('tbody').innerHTML = "";

    // Loop through the retrieved data and add a row for each item
    for (var i = 0; i < retrieved_data.length; i++) {
        var item = retrieved_data[i];
        document.getElementById('tbody').innerHTML += `
        <tr>
            <td>${item.customer_name}</td>
            <td>${item.customer_phone_number}</td>
            <td>${item.product}</td>
            <td>${item.price}</td>
            <td>${item.delivery_city}</td>
            <td id="status_new_parcel"><a href="">New Parcel</a></td>
            <td><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></td>
        </tr>
        `;
    }
}

function add_parcel(){
    var customer_name = document.getElementById('customer_name').value;
    var customer_phone_number = document.getElementById('customer_phone_number').value;

    var product = document.getElementById('product_select').value;
    var price = document.getElementById('price').value;

    var delivery_city = document.getElementById('delivery_city').value;
    var notes = document.getElementById('notes').value;

    if(customer_name === "" || customer_phone_number === "" || product === "" || price === "" || delivery_city === ""){
        document.getElementById('error').innerHTML = "Fields Empty";
    } else {
        document.getElementById('add_info').style.display="none";
        document.getElementById('add_parcel').style.display="inline";

        // Retrieve data from local storage
        var data = JSON.parse(localStorage.getItem("data")) || [];

        // Add new data to the array
        data.push({
            customer_name: customer_name,
            customer_phone_number: customer_phone_number,
            product: product,
            price: price,
            delivery_city: delivery_city
        });

        // Save the updated array to local storage
        window.localStorage.setItem('data', JSON.stringify(data));

        // Retrieve Data
        var retrieved_data = JSON.parse(localStorage.getItem("data"));

        // Clear the table body
        document.getElementById('tbody').innerHTML = "";

        // Loop through the retrieved data and add a row for each item
        for (var i = 0; i < retrieved_data.length; i++) {
            var item = retrieved_data[i];
            document.getElementById('tbody').innerHTML += `
            <tr>
                <td>${item.customer_name}</td>
                <td>${item.customer_phone_number}</td>
                <td>${item.product}</td>
                <td>${item.price}</td>
                <td>${item.delivery_city}</td>
                <td id="status_new_parcel"><a href="">New Parcel</a></td>
                <td><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></td>
            </tr>
            `;
        }

}
}


