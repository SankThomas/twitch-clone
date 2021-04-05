import React from "react"
import { streamers } from "../data/streamers"

const Sidebar = () => {
  const [people, setPeople] = React.useState(streamers)
  return (
    <>
      <ul className="w-12 pr-1 pt-5 bg-gray-100 h-screen select-none xl:w-32">
        {people.map(({ id, avatar_url, name }) => {
          return (
            <li
              key={id}
              className="flex items-center px-2 mb-4 cursor-pointer"
              title={name}
            >
              <img
                src={avatar_url}
                alt={name}
                className="w-8 rounded-full border-2 border-purple-800"
              />
              <h4 className="text-sm ml-2 hidden xl:block">{name}</h4>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Sidebar
