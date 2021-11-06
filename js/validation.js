function validateForm() {
  let x = document.forms["rekrutacja"]["first-name"].value;
  if (x == "") {
    alert("Podaj imię!");
    return false;
  }

  let y = document.forms["rekrutacja"]["last-name"].value;
  if (y == "") {
    alert("Podaj nazwisko!");
    return false;
  }

  let z = document.forms["rekrutacja"]["email"].value;
  if (z == "") {
    alert("Podaj adres email!");
    return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.forms["rekrutacja"]["email"].value)){
    alert("Adres email jest nie poprawny!");
    return false;
  }


  // console.log(document.forms["rekrutacja"]["checkboxes"]["frontend-checkbox"].value);

  // if(document.forms["rekrutacja"]["checkboxes"]["frontend-checkbox"].checked == false || document.forms["rekrutacja"]["checkboxes"]["mobile-checkbox"].checked == false || document.forms["rekrutacja"]["checkboxes"]["backend-checkbox"].checked == false || document.forms["rekrutacja"]["checkboxes"]["graphics-checkbox"].checked == false){
  //   alert("Zaznacz conajmniej jedna sekcje!");
  //   return false;
  // }
  //Niestety nie uadło mi się zaimplementowac waliddacji zaznaczenia


}
