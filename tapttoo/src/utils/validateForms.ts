const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailError = "Insira um e-mail válido";
const passwordError = "Sua senha deve ter entre 6 e 20 caracteres.";
const textRequiredField = "Preencha este campo!";

const setInvalid = (element: HTMLInputElement, errorMessage: string) => {
  element.classList.add("error");
  element.setCustomValidity(errorMessage);
};

const setValid = (element: HTMLInputElement) => {
  element.classList.remove("error");
  element.setCustomValidity("");
};

const setElementValidity = (element: HTMLInputElement) => {
  const { name, value } = element;

  const errorField = document.getElementById(
    `validation-${name}`
  ) as HTMLElement;

  if (element.validity.valueMissing) {
    setInvalid(element, textRequiredField);
    errorField.textContent = element.validationMessage;
    return;
  }
  element.classList.remove("error");
  element.setCustomValidity("");

  if (name === "email") {
    if (element.validity.typeMismatch || !regex.test(value)) {
      setInvalid(element, emailError);
    } else {
      setValid(element);
    }
  } else if (name === "password") {
    if (value.length < 6 || value.length > 20) {
      setInvalid(element, passwordError);
    } else {
      setValid(element);
    }
  } else if (name === "confirm-password") {
    if (value.length < 6 || value.length > 20) {
      setInvalid(element, passwordError);
    } else {
      setValid(element);
    }
  }
  errorField.textContent = element.validationMessage;
};

export const validateForm = (ids: string[]) => {
  ids.forEach((id) => {
    const element = document.getElementById(id) as HTMLInputElement;
    if (element) {
      setElementValidity(element);
    }
  });
};
