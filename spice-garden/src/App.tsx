// App.tsx
// Root component – imports and renders every section in order.
// Each section is a self-contained component in src/components/.

import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import PopularDishes from './components/PopularDishes'
import FullMenu     from './components/FullMenu'
import Gallery      from './components/Gallery'
import OpeningHours from './components/OpeningHours'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      {/* Fixed navigation bar – sits above every section */}
      <Navbar />

      {/* Main page content */}
      <main>
        <Hero />
        <About />
        <PopularDishes />
        <FullMenu />
        <Gallery />
        <OpeningHours />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
