import { useEffect, useState } from 'react'
import axios from 'axios'

export default function BugList() {
  const [bugs, setBugs] = useState([])

  useEffect(() => {
    axios.get('/api/bugs').then(res => setBugs(res.data))
  }, [])

  return (
    <ul>
      {bugs.length ? bugs.map(bug => (
        <li key={bug._id}>{bug.title} - {bug.status}</li>
      )) : <p>No bugs yet.</p>}
    </ul>
  )
}
