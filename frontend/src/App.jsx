import './App.css'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import Footer from './components/Footer'
import ElasticCursor from './components/ElasticCursor'
import ScrollToTop from './components/ScrollToTop'
import { SiteConfigProvider } from './context/SiteConfigContext'

function App() {
  return (
    <SiteConfigProvider>
      <div className="nt-app">
        <ElasticCursor />
        <ScrollToTop />
        <Header />
        <main className="nt-page">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </SiteConfigProvider>
  )
}

export default App
