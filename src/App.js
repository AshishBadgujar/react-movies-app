import React from 'react'
import Search from './search'
import BigCard from './bigCard'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Search} />
        <Route path="/:id" component={BigCard} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
