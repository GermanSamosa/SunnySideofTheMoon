window.addEventListener('load', () => {
    debugger;
const params = (new URL(document.location)). searchParams;
debugger;
const first_name = params.get('fname');
debugger;
const checkbox_package = params.get('flexRadioPackage');
const duration_of_stay = params.get('length_of_stay');

document.getElementById('result-fname').innerHTML = first_name;
debugger;
document.getElementById('result-flexRadioPackage').innerHTML = checkbox_package;
debugger;
document.getElementById('result-length_of_stay').innerHTML = duration_of_stay;



})