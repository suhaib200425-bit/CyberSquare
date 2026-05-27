
import HighlightOne from './Highlight/HighlightOne/HighlightOne'
import './App.css'
import HeroFour from './HeroSections/HeroFour/HeroFour'
import HeroOne from './HeroSections/HeroOne/HeroOne'
import HeroThree from './HeroSections/HeroThree/HeroThree'
import HeroTwo from './HeroSections/HeroTwo/HeroTwo'
import LatestPostFour from './LatestPostsSection/LatestPostFour/LatestPostFour'
import LatestPostOne from './LatestPostsSection/LatestPostOne/LatestPostOne'
import LatestPostsFive from './LatestPostsSection/LatestPostsFive/LatestPostsFive'
import LatestPostThree from './LatestPostsSection/LatestPostThree/LatestPostThree'
import LatestPostTwo from './LatestPostsSection/LatestPostTwo/LatestPostTwo'
import PopularPostsList from './PopularList/PopularListOne'

function App() {

  return (
    <div className="">
      <HighlightOne />
      <LatestPostsFive />
      <PopularPostsList />
      <HeroFour />
      <LatestPostThree />
      <LatestPostTwo />
      <LatestPostOne />
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <LatestPostFour />
    </div>
  )
}

export default App
