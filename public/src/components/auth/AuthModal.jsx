"use client"
import React, {useState} from "react";
import { IoMdClose } from 'react-icons/io'
import FormInput from "../common/FormInput";
import {useAppStore} from 'airbnb/store/store';
import { checkUser, signup, login } from "airbnb/lib/auth";


const AuthModal = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userFound, setUserFound] = useState(null);

  const {setAuthModal, setIsLoggedIn, setUserInfo, userInfo } = useAppStore();

  const verifyEmail = async () => {
    const data = await checkUser(email);
    if(!data) setUserFound(false);
    else {
      setUserFound(true);
      setUserInfo(data);
    };
  };

  const handleLogin = async () => {
    if(email && password) {
      const data = await login(email, password);
      setAuthModal();
      setUserInfo(data);
      setIsLoggedIn(true);
    }
  };

  const handleSignup = async () => {
    if(email && password && firstName && lastName) {
      const data = await signup(email, password, firstName, lastName);
      setAuthModal();
      setUserInfo(data);
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-[rgb(25,33,77,0.46)] transition-opacity">
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white pb-4 pt-5">
                <div className="border-b border-b-gray-200 flex items-center justify-center relative pb-5">
                  <span className="absolute left-5 cursor-pointer text-lg"
                  onClick={()=> setAuthModal()}>
                    <IoMdClose></IoMdClose>
                  </span>
                  {
                    userFound === null ?
                    <span>Log in or signup</span>:
                    <span>{userFound === true ? `Welcome back, ${userInfo.firstName}!` : `Sign up with ${email}`}</span>
                  }
                </div>
                <div className="p-5">
                  <h3 className="text-xl pb-5">Welcome to D3 Properties</h3>
                  {userFound === null &&
                    <FormInput type="email" name="email" placeholder="Email" value={email} setValue={setEmail}></FormInput>
                  }
                  {userFound === true &&
                    <FormInput type="password" name="password" placeholder="Password" value={password} setValue={setPassword}></FormInput>
                  }
                  {userFound === false &&
                  <div className="flex gap-3 flex-col">
                    <FormInput name="firstName" placeholder="FirstName" value={firstName} setValue={setFirstName}></FormInput>
                    <FormInput name="lastName" placeholder="LastName" value={lastName} setValue={setLastName}></FormInput>
                    <FormInput type="password" name="password" placeholder="Password" value={password} setValue={setPassword}></FormInput>
                  </div>
                  }
                  <button className="bg-d3prop-theme-color py-3 mt-5 w-full text-white font-medium rounded-md hover:bg-blue-600"
                    onClick={userFound === null ? verifyEmail : userFound ? handleLogin : handleSignup}>Continue</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
