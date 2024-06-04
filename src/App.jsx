import Courses from "./components/courses"
import Header from "./components/header"
import Start from "./components/start"
import Footer from "./components/footer"
import Congress from "./components/congress"
import Podcast from "./components/podcast"
import Depoiments from "./components/depoiments"

function App() {
  return (
    <div className="flex-column">
      <Header />
      <Start />
      <Courses />
      <Congress />
      <Podcast />
      <Depoiments />
      <Footer />
    </div>
  )
}

export default App
