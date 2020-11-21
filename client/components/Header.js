import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ userName, repositoryName, user }) => {

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-purple-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <img className="mx-6 w-10 h-10 rounded-full" src={user.avatar_url} alt="" />
          </span>
          <span className="font-semibold text-xl tracking-tight uppercase">{userName}</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="block justify-end mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 float-right"
            >
              Back to Main
            </Link>
            {repositoryName && (
              <Link
                to={`/${userName}`}
                className="block mx-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white float-right f"
              >
                Back to Repo
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
