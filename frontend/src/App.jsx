import Home from './pages/Home'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  )
}

export default App
