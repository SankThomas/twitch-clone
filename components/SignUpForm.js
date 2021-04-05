import React, { useState } from "react"
import { CgClose } from "react-icons/cg"
import { GrFacebook } from "react-icons/gr"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import styles from "../styles/Home.module.css"

const SignUpForm = ({ setSignUpForm }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className="absolute -right-9 top-0 hover:bg-gray-100 p-1 rounded cursor-pointer">
          <CgClose className="text-xl" onClick={() => setSignUpForm(false)} />
        </div>

        <div className="flex items-center justify-center mb-5">
          <img
            src="./favicon.png"
            alt="Twitch"
            title="Log in to Twitch"
            className="w-14"
          />
          <h4 className="text-2xl font-semibold">Join Twitch Today</h4>
        </div>
        <div>
          <button className="mx-2">Log In</button>
          <button className="border-b-2 border-purple-800 text-indigo-800 font-semibold">
            Sign Up
          </button>
        </div>
        <div className={styles.formUnderline}></div>
        <label htmlFor="text" className="font-semibold mb-1">
          Username
        </label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password" className="font-semibold mt-5 mb-1">
          Password
        </label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password2" className="font-semibold mt-5 mb-1">
          Confirm password
        </label>
        <input type="password" name="password2" id="password2" />
        <label htmlFor="date" className="font-semibold mt-5 mb-1">
          Date of Birth
        </label>
        <input type="date" name="date" id="date" />
        <label htmlFor="email" className="font-semibold mt-5 mb-1">
          Email
        </label>
        <input type="email" name="email" id="email" />
        <button type="submit" className="btn-primary mt-5">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
