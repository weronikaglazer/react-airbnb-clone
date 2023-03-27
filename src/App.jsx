import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import Footer from './components/Footer'

function App() {
  const cardsElements = data.map(element => {
    return (
      <Card 
        key={element.id}
        {...element}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards'>
        {cardsElements}
      </section>
      <Footer />
    </div>
    
  )
}

export default App
