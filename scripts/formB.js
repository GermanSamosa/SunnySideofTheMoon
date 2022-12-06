//hadleSubmit function
function hadleSubmit() {
    debugger;
    const first_name = document.getElementById('fname').value;
    debugger;
    var checkbox_package;
    const duration_of_stay = document.getElementById('length_of_stay').value;

    var sunny_package = document.getElementById('sunny_package');
    var sunny_plus_package = document.getElementById('sunny_plus_package');
    var sunny_extreme_package = document.getElementById('sunny_extreme_package');
    var sunny_honeymoon_package = document.getElementById('sunny_honeymoon_package');
    if (sunny_package.checked==true)
        var checkbox_package = document.getElementById('sunny_package').value;
        else if (sunny_plus_package.checked==true)
        var checkbox_package = document.getElementById('sunny_plus_package').value; 
        else if (sunny_extreme_package.checked==true)
        var checkbox_package = document.getElementById('sunny_extreme_package').value;
        else if (sunny_honeymoon_package.checked==true)
        var checkbox_package = document.getElementById('sunny_honeymoon_package').value;
    

    //set the local storage
    localStorage.setItem('First_name', first_name);
    localStorage.setItem('Pkg', checkbox_package);
    localStorage.setItem('Duration', duration_of_stay);
    return;
}
function validateForm() {
    var fname = document.forms["booking_form"]["fname"].value;
    var lname = document.forms["booking_form"]["lname"].value;
    var address = document.forms["booking_form"]["address"].value;
    var city = document.forms["booking_form"]["city"].value;
    var postal_code = document.forms["booking_form"]["postal_code"].value;
    var email = document.forms["booking_form"]["email"].value;
    var phone = document.forms["booking_form"]["phone"].value;
    var card_wallet = document.forms["booking_form"]["card_wallet"].value;
    var cvs = document.forms["booking_form"]["cvs"].value;

    var fnameRegex = /^[A-Za-z\s]+$/;
    var lnameRegex = /^[A-Za-z\s]+$/;
    var addressRegex = /^[A-Za-z0-9_\s]+$/;
    var cityRegex = /^[A-Za-z\s]+$/;
    var postal_codeRegex = /^[A-Za-z0-9_\s]+$/;
   // var emailRegex = /^ ^(.+)@(.+)$/;
    var phoneRegex = /^[0-9()-\s]+$/;
    var card_walletRegex =  /^\d+$/;
    var cvsRegex =  /^\d+$/; 

    var fnameResult = fnameRegex.test(fname);
    var lnameResult = lnameRegex.test(lname);
    var addressResult = addressRegex.test(address);
    var cityResult = cityRegex.test(city);
    var postal_codeResult = postal_codeRegex.test(postal_code);
    //var emailResult = emailRegex.test(email);
    var phoneResult = phoneRegex.test(phone);
    var card_walletResult = card_walletRegex.test(card_wallet);
    var cvsResult = cvsRegex.test(cvs);

    if (fnameResult == false ) {
        alert("first name must be filled out");
        return false;
    }
    if (lnameResult == false) {
        alert("last name must be filled out");
        return false;
    } 
    if (addressResult == false) {
        alert("address must be filled out");
        return false;
    }
    if (cityResult == false) {
        alert("city must be filled out");
        return false;
    }
    if (postal_codeResult == false) {
        alert("postal code must be filled out");
        return false;
    }
    if (email/**Result*/ == null || email == "") {
        alert("email must be filled out");
        return false;
    }
    if (phoneResult == false) {
        alert("phone name must be filled out");
        return false;
    }
    if (card_walletResult == false) {
        alert("card details must be filled out");
        return false;
    }
    if (cvsResult == false) {
        alert("security code must be filled out");
        return false;
    }
    return true;

}