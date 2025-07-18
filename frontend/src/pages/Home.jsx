import BugForm from '../components/BugForm'
import BugList from '../components/BugList'

export default function Home() {
  return (
    <div>
      <h1>Bug Tracker</h1>
      <BugForm onBugCreated={() => window.location.reload()} />
      <BugList />
    </div>
  )
}
