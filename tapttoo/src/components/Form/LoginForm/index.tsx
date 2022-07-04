import Input from "../components/Input";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { passwordPlaceholder, userPlaceholder } from "./locales";
import {
  Anchor,
  Form,
  FormButtonContainer,
  LoaderContainer,
  Main,
  SignUpButtonContainer,
  Title,
  ValidationMessage,
} from "../styled";
import Button from "../components/Button";
import { FormEvent, useCallback, useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import { BASE_URL } from "../../../utils/url";
import { gray_800 } from "../../../utils/colors";
import { Oval } from "react-loader-spinner";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateForm } from "../../../utils/validateForms";

interface LoginFormProps {
  section_login: {
    title: string;
    forgot: string;
    register: string;
    register_call: string;
    login_call: string;
  };
}

const LoginForm = ({ section_login }: LoginFormProps) => {
  const { title, forgot, login_call, register, register_call } = section_login;
  const { form, onChange } = useForm({ email: "", password: "" });

  const [requestData, setRequestData] = useState({
    isLoading: false,
    isCompleted: false,
    error: false,
    success: false,
    message: "",
  });

  const { isLoading, isCompleted, error, success, message } = requestData;

  const renderLoginStatus = useCallback(() => {
    if (isCompleted) {
      if (success) {
        toast.success(message, {
          theme: "colored",
        });
      } else if (error) {
        toast.error(message, {
          theme: "colored",
        });
      }
    }
  }, [error, isCompleted, message, success]);

  const submitLogin = (e: FormEvent) => {
    e.preventDefault();
    setRequestData({ ...requestData, isLoading: true, isCompleted: false });

    validateForm(["email", "password"]);

    const { email, password } = form;
    const request = new Request(`${BASE_URL}/login/`);
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    fetch(request, { method: "POST", body: formData })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res.Ok) {
          setRequestData({
            isLoading: false,
            isCompleted: true,
            error: false,
            success: true,
            message: res.Ok,
          });
        } else {
          setRequestData({
            isLoading: false,
            isCompleted: true,
            error: true,
            success: false,
            message: res.Error,
          });
        }
      })
      .catch((err) => {
        setRequestData({
          isLoading: false,
          isCompleted: true,
          error: true,
          success: false,
          message: err,
        });
      });
  };

  useEffect(() => {
    renderLoginStatus();
  }, [isCompleted, error, success, renderLoginStatus]);

  return (
    <Main>
      <ToastContainer
        newestOnTop={true}
        closeOnClick
        draggable
        autoClose={5000}
        rtl={false}
      />
      <Form onSubmit={submitLogin} noValidate>
        <Title>{title}</Title>
        <div>
          <Input
            onChange={onChange}
            value={form.email}
            name="email"
            type="email"
            id="email"
            placeholder={userPlaceholder}
            required
          >
            <AiOutlineUser />
          </Input>
          <ValidationMessage id="validation-email"></ValidationMessage>
          <Input
            onChange={onChange}
            value={form.password}
            id="password"
            name="password"
            type="password"
            placeholder={passwordPlaceholder}
            required
          >
            <AiOutlineLock />
          </Input>
          <ValidationMessage id="validation-password"></ValidationMessage>
        </div>

        <FormButtonContainer>
          <Anchor>{forgot}</Anchor>
          <Button submit border="none" color="white" background={gray_800}>
            {isLoading ? (
              <LoaderContainer>
                <Oval height="1.5rem" color="white" />
              </LoaderContainer>
            ) : (
              login_call
            )}
          </Button>
        </FormButtonContainer>

        <SignUpButtonContainer>
          <p>{register}</p>
          <Link href="sign-up">
            <Button
              background="white"
              color={gray_800}
              border={`2px solid ${gray_800}`}
              width="11.25rem"
            >
              {register_call}
            </Button>
          </Link>
        </SignUpButtonContainer>
      </Form>
    </Main>
  );
};

export default LoginForm;
