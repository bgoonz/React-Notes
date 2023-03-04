



let formIsValid = false;
if (enteredEmailIsValid) {
  formIsValid = true;
}



const formSubmissionHandler = (event) => {

  event.preventDefault();
  if (!enteredEmailIsValid) {
    return;
  }

  console.log(enteredEmail);
  setEnteredEmail("");
  setEnteredEmailTouched(false);
};

const emailInputClasses = emailInputIsInvalid
  ? "form-control invalid"
  : "form-control";
