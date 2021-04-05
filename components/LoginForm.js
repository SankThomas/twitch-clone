import React, { useState } from "react"
import Link from "next/link"
import { CgClose } from "react-icons/cg"
import { GrFacebook } from "react-icons/gr"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import styles from "../styles/Home.module.css"

const LoginForm = ({ setForm }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className="absolute -right-9 top-0 hover:bg-gray-100 p-1 rounded cursor-pointer">
          <CgClose className="text-xl" onClick={() => setForm(false)} />
        </div>

        <div className="flex items-center justify-center mb-5">
          <img
            src="./favicon.png"
            alt="Twitch"
            title="Log in to Twitch"
            className="w-14"
          />
          <h4 className="text-2xl font-semibold">Log in to Twitch</h4>
        </div>
        <div>
          <button className="border-b-2 border-purple-800 text-indigo-800 font-semibold">
            Log In
          </button>
          <button className="mx-2">Sign Up</button>
        </div>
        <div className={styles.formUnderline}></div>
        <label htmlFor="text" className="font-semibold mb-1">
          Username
        </label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password" className="font-semibold mt-5 mb-1 relative">
          Password
          {/* <button>
            {showPassword ? (
              <AiOutlineEyeInvisible className="absolute top-10 right-2 z-10" />
            ) : (
              <AiOutlineEye className="absolute top-10 right-2 z-10" />
            )}
          </button> */}
        </label>
        <input type="password" name="password" id="password" />

        <Link href="/account-recovery">
          <a className="text-purple-800 text-sm mt-4 mb-6 hover:underline">
            Trouble logging in?
          </a>
        </Link>
        <button type="submit" className="btn-primary">
          Log In
        </button>
        <div>
          <p className="text-center my-5">or</p>
          <p className="text-center">
            <button className="bg-blue-900 py-1 px-2 text-white flex items-center justify-center">
              <GrFacebook />
              &nbsp;Connect with Facebook
            </button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
