import Input from "../components/Input";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import Button from "../components/Button";
import {
  Form,
  Title,
  FormButtonContainer,
  LoginButtonContainer,
  ValidationMessage,
} from "../styled";
import {
  alreadyHasAccount,
  confirmPasswordPlaceholder,
  emailPlaceholder,
  loginText,
  passwordPlaceholder,
  signUpButton,
  signUpTitle,
  userPlaceholder,
} from "./locales";
import Link from "next/link";
import { validateForm } from "../../../utils/validateForms";
import { FormEvent } from "react";
import { gray_800 } from "../../../utils/colors";

const SignUpForm = () => {
  const signUp = (e: FormEvent) => {
    e.preventDefault();
    validateForm(["user", "email", "password", "confirm-password"]);
  };

  return (
    <Form onSubmit={signUp} noValidate>
      <Title>{signUpTitle}</Title>
      <div>
        <Input
          id="user"
          name="user"
          type="text"
          placeholder={userPlaceholder}
          required
        >
          <AiOutlineUser />
        </Input>
        <ValidationMessage id="validation-user"></ValidationMessage>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder={emailPlaceholder}
          required
        >
          <AiOutlineMail />
        </Input>
        <ValidationMessage id="validation-email"></ValidationMessage>

        <Input
          id="password"
          name="password"
          type="password"
          placeholder={passwordPlaceholder}
          required
        >
          <AiOutlineLock />
        </Input>
        <ValidationMessage id="validation-password"></ValidationMessage>

        <Input
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder={confirmPasswordPlaceholder}
          required
        >
          <AiOutlineLock />
        </Input>
        <ValidationMessage id="validation-confirm-password"></ValidationMessage>
      </div>

      <FormButtonContainer>
        <Button
          width="20rem"
          submit
          border="none"
          color="white"
          background={gray_800}
        >
          {signUpButton}
        </Button>
      </FormButtonContainer>

      <LoginButtonContainer>
        <p>{alreadyHasAccount}</p>
        <Link href="/">
          <Button
            background="white"
            color={gray_800}
            border={`2px solid ${gray_800}`}
            width="10rem"
          >
            {loginText}
          </Button>
        </Link>
      </LoginButtonContainer>
    </Form>
  );
};

export default SignUpForm;
