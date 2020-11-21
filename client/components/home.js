import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import RepoList from './RepoList'
import ReadMe from './ReadMe'
import Header from './Header'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [repoList, setRepoList] = useState([])
  const [readme, setReadme] = useState('')
    const [user, setUser] = useState('')
  useEffect(() => {
    if (repositoryName) {
      axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      }).then(({ data }) => setReadme(data))
    }
    console.log('1')
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  return (
    <div>
      <Header repoList={repoList} userName={userName} repositoryName={repositoryName} user={user}/>
      <Route
        exact
        path="/:userName"
        component={() => <RepoList repoList={repoList} userName={userName} />}
      />
      <Route exact path="/:userName/:repositoryName" component={() => <ReadMe readme={readme} />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
