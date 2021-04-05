import React from "react"
import Link from "next/link"
import Header from "../components/Header"
import LoginForm from "../components/LoginForm"
import Meta from "../components/Meta"
import Sidebar from "../components/Sidebar"
import styles from "../styles/Home.module.css"
import SignUpForm from "../components/SignUpForm"

const Home = () => {
  const [form, setForm] = React.useState(false)
  const [signUpForm, setSignUpForm] = React.useState(false)
  return (
    <>
      <Meta />
      <header>
        <Header form={form} setForm={setForm} setSignUpForm={setSignUpForm} />
      </header>
      <div>
        <Sidebar />
      </div>

      {form && (
        <div>
          <LoginForm form={form} setForm={setForm} />
        </div>
      )}

      {signUpForm && (
        <div>
          <SignUpForm signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
        </div>
      )}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="w-14" />
        </a>
      </footer>
    </>
  )
}

export default Home
