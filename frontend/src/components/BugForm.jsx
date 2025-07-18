import { useState } from 'react'
import axios from 'axios'

export default function BugForm({ onBugCreated }) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post('/api/bugs', { title, description: desc })
    onBugCreated(res.data)
    setTitle('')
    setDesc('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Bug title" />
      <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" />
      <button type="submit">Report Bug</button>
    </form>
  )
}
