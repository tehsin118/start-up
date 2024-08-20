import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Input from "../../components/shared/input";
import eyeOpen from "../../assets/icons/eye-open.svg";
import google from "../../assets/icons/google.svg";
import Checkbox from "../../components/shared/checkbox";
import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/button";

const Login = () => {
  const navigate = useNavigate();
  const url = "https://dummyjson.com/auth/login";
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "tehsin118@gmail.com",
    password: "12345678",
  });
  const [errors, setErrors] = useState({});

  // handle onChange register form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //   validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  //   handle submit form
  const handleSubmit = async (e) => {
    setLoading(true);

    let requestBody = {
      email: formData.email,
      password: formData.password,
    };

    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    } else {
      setErrors("");

      try {
        console.log(url);
        console.log(requestBody);
        const response = await axios.post(url, requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        setLoading(false);
        // localStorage.setItem("auth", JSON.stringify(response));

        // navigate("/dashboard");
      } catch (error) {
        // console.log(error.response?.data?.detail);
        console.log(error);
        if (
          error.response?.data?.detail ==
          "No active account found with the given credentials"
        ) {
          console.log("Oops");
          handleDelete();
        }
        setLoading(false);
      }
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Oops! User Not Found",
      text: "Please register to get access",
      icon: "warning",
      width: 600,
      showCancelButton: false,
      buttonsStyling: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#000",
      confirmButtonText: "Resgiter Now",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/signup");
      }
    });
  };
  return (
    <>
      <section className="account min-h-screen py-7 flex flex-col justify-center">
        <div className="container h-full">
          <div className="max-w-[554px]  h-full flex flex-col items-center justify-center w-full m-auto">
            <img src={logo} alt="evisa village" className="w-36" />

            <div className="form-wrapper w-full">
              <div className="mt-32 mb-14">
                <h3 className="font-bold text-center">Log In</h3>
                <p className="medium font-semibold mt-4 text-center">
                  Enter Your Email Address And Password To Log in.
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  label="Email"
                  name="email"
                  value={formData?.email}
                  errorMessage={errors.email}
                  onChange={handleChange}
                />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    label="Password"
                    name="password"
                    icon={eyeOpen}
                    value={formData?.password}
                    errorMessage={errors.password}
                    onChange={handleChange}
                  />

                  <div className="remember-me-div flex items-center justify-between !mt-3">
                    <div className="left v-center gap-2">
                      <Checkbox
                        label="Remember me!"
                        labelClass="medium"
                        id="remember"
                        value={formData.remember}
                        onChange={handleChange}
                      />
                    </div>
                    <p
                      className="text-sm fw-normal cursor-pointer underline"
                      onClick={() => {
                        navigate("/forget-password");
                      }}
                    >
                      Forgot Password?
                    </p>
                  </div>
                </div>
                <Button
                  className="btn-primary w-full h-11"
                  text="Log in"
                  onClick={handleSubmit}
                />

                <div>
                  <p className="font-semibold text-center ">or Login with</p>
                  <img src={google} alt="google" className="m-auto mt-6 cursor-pointer" />
                  <p className="font-semibold text-center mt-16">
                  Doesn’t have an account? 
                    <span className="cursor-pointer text-blue-600" onClick={()=>navigate("/register")}> Create Account</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
