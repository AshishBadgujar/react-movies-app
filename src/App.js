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
        <div className="container" style={{ height: "100%" }}>
          <Route exact path="/" component={Search} />
          <Route path="/:id" component={BigCard} />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
