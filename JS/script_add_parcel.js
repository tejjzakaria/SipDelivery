

function show(){
    document.getElementById('add_info').style.display="inline";
    document.getElementById('add_parcel').style.display="none";
}

function hide(){
    document.getElementById('add_info').style.display="none";
    document.getElementById('add_parcel').style.display="inline";
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
    }
    else {
        
        document.getElementById('add_info').style.display="none";
        document.getElementById('add_parcel').style.display="inline";
        // Save Data
        window.localStorage.setItem('customer_name', JSON.stringify(customer_name));
        window.localStorage.setItem('customer_phone_number', JSON.stringify(customer_phone_number));
        window.localStorage.setItem('product', JSON.stringify(product));
        window.localStorage.setItem('price', JSON.stringify(price));
        window.localStorage.setItem('delivery_city', JSON.stringify(delivery_city));
        // Retrieve Data
        var retrieved_customer_name = localStorage.getItem("customer_name");
        var retrieved_customer_phone_number = localStorage.getItem("customer_phone_number");
        var retrieved_product = localStorage.getItem("product");
        var retrieved_price = localStorage.getItem("price");
        var retrieved_delivery_city = localStorage.getItem("delivery_city");
        // Show Data
        document.getElementById('tbody').innerHTML += `
        <tr>
            <td>${retrieved_customer_name}</td>
            <td>${retrieved_customer_phone_number}</td>
            <td>${retrieved_product}</td>
            <td>${retrieved_price}</td>
            <td>${retrieved_delivery_city}</td>
            <td id="status_new_parcel"><a href="">New Parcel</a></td>
            <td><i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-trash"></i></td>
        </tr>
        `;

    }




}




