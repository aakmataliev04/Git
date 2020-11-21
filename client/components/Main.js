import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [user, setUser] = useState('')
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <input
        className="h-10 w-64 border-solid-gray bg-gray-700 bg-transparent hover:bg-white text-blue-700 hover:text-white..."
        type="text"
        placeholder="            Username"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <Link className="h-10 w-18 p-2 mx-4 bg-gray-700 bg-transparent hover:bg-white text-blue-700 hover:text-white..." to={`/${user}`}>
        Search Repo
      </Link>
    </div>
  )
}
export default Main
