import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import image from '../assets/beach.png'

function Home() {
  return (
    <div>
      <Banner image={image} />
      <Card />
    </div>
  )
}
export default Home
