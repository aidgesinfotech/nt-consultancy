import './App.css'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import Footer from './components/Footer'
import ElasticCursor from './components/ElasticCursor'

function App() {
  return (
    <div className="nt-app">
      <ElasticCursor />
      <Header />
      <main className="nt-page">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
