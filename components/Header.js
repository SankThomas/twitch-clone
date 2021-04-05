import React, { useState } from "react"
import Link from "next/link"
import { BsThreeDots, BsSearch } from "react-icons/bs"
import { CgCrown } from "react-icons/cg"
import { FiUser } from "react-icons/fi"

const Header = ({ setForm, setSignUpForm }) => {
  // const [openForm, setOpenForm] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="flex items-center justify-between py-1 px-2">
      <div className="flex items-center">
        <img src="./favicon.png" alt="Twitch" className="w-10" />

        <Link href="/directory">
          <a className="mx-2 font-semibold">Browse</a>
        </Link>

        <div>
          <BsThreeDots />
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="search"
            name="search"
            id="searchInput"
            placeholder="Search"
            className="rounded-r-none"
          />
          <button type="submit" className="bg-gray-100 p-3">
            <BsSearch />
          </button>
        </form>
      </div>

      <div className="flex items-center">
        <CgCrown className="text-xl mr-2" />
        <button className="btn-light ml-2" onClick={() => setForm(true)}>
          Log In
        </button>
        <button
          className="btn-primary mx-2"
          onClick={() => setSignUpForm(true)}
        >
          Sign Up
        </button>
        <FiUser className="text-xl ml-2" />
      </div>
    </div>
  )
}

export default Header
