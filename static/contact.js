const subjectField = document.querySelector(".subject-input");
const msgField = document.querySelector(".message-input");
const emailField = document.querySelector(".email-input");
const submitBtn = document.querySelector("button[type=\"submit\"]");

const reEmailValidation = /.+@+.+\.+./;

const validateForm = () => {
  if (
    subjectField.value.trim()
    && msgField.value.trim()
    && reEmailValidation.test(emailField.value)
  ) { submitBtn.removeAttribute('disabled'); }
  else { submitBtn.setAttribute('disabled', 'disabled'); }
}

[subjectField, msgField, emailField].map(field => field.addEventListener('input', validateForm));
