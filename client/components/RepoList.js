import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const RepoList = ({ repoList, userName }) => {
  const [search, setSearch] = useState('')
  const searchRepo = repoList.filter(repo => repo.name.includes(search))
  return (
    <div className="flex justify-between flex-wrap float-left">
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="       Search Repo" className=" bg-purple-700 focus:bg-purple-500 border-transparent focus:border-blue-400 ...  border-solid border-2 mx-2 my-2 w-1/2 h-8" type="text" />
      {searchRepo.map((repo) => {
        return (
          <div className="m-2 border-solid border-4 border-gray-600 ... p-2 w-1/2" key={repo.id} >
            <Link to={`/${userName}/${repo.name}`}><span className="mx-16 float-left">{repo.name}</span></Link>
          </div>
        )
      })}
    </div>
  )
}
export default RepoList
