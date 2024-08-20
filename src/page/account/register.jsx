import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Input from "../../components/shared/input";
import eyeOpen from "../../assets/icons/eye-open.svg";
import google from "../../assets/icons/google.svg";
import Checkbox from "../../components/shared/checkbox";
import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/button";

const Register = () => {
  const navigate = useNavigate();
  const url = "https://dummyjson.com/auth/login";
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "Muhammad Tehsin",
    email: "tehsin118@gmail.com",
    password: "12345678",
    confirmPassword: "12345678",
  });

  // handle onChange register form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required.";
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Passwords length should be minimum 8 characters.";
    }
    return newErrors;
  };

  //   handle submit form
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    let requestBody = {
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
    };
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }

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
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <section className="account min-h-screen py-7 flex flex-col justify-center">
        <div className="container h-full">
          <div className="max-w-[554px]  h-full flex flex-col items-center justify-center w-full m-auto">
            <img src={logo} alt="evisa village" className="w-36" />

            <div className="form-wrapper w-full">
              <div className="mt-16 mb-10">
                <h3 className="font-bold text-center">Register</h3>
                <p className="medium font-semibold mt-4 text-center">
                  Enter Your Email Address And Password To Log in.
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  label="Full name"
                  name="fullName"
                  value={formData?.fullName}
                  errorMessage={errors.fullName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Enter your email"
                  label="Email"
                  name="email"
                  value={formData?.email}
                  errorMessage={errors.email}
                  onChange={handleChange}
                />
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
                <div>
                  <Input
                    type="password"
                    placeholder="Re-enter password"
                    label="Re-enter password"
                    name="confirmPassword"
                    icon={eyeOpen}
                    value={formData?.confirmPassword}
                    errorMessage={errors.confirmPassword}
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

                <Button
                  className="btn-primary w-full h-11 mt-7"
                  text="Log in"
                  onClick={handleSubmit}
                />
              </div>

              <div>
                <p className="font-semibold text-center ">or Login with</p>
                <img
                  src={google}
                  alt="google"
                  className="m-auto mt-6 cursor-pointer"
                />
                <p className="font-semibold text-center mt-16">
                Already have an account? 
                  <span className="cursor-pointer text-blue-600" onClick={()=>navigate("/login")}>
                    {" "}
                    Log In
                  </span>
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

export default Register;
