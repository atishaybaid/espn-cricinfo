import Carousel from "./Carousel.tsx";
import ScoreCard from "./ScoreCard.tsx";

const Home  = ()=>{
    return (
        <div className="home-page">
        <h1>
            Home page will be rendered
        </h1>
        <Carousel simultanousCards="3">

            <ScoreCard   dummyMatchNo="1"/>
            <ScoreCard dummyMatchNo="2" />
            <ScoreCard  dummyMatchNo="3"/>
            <ScoreCard  dummyMatchNo="4"/>
            <ScoreCard  dummyMatchNo="5"/>
            <ScoreCard  dummyMatchNo="6"/>
            <ScoreCard dummyMatchNo="7" />
            <ScoreCard dummyMatchNo="8" />
            <ScoreCard  dummyMatchNo="9"/>
            <ScoreCard  dummyMatchNo="10"/>
            <ScoreCard dummyMatchNo="11" />
            <ScoreCard  dummyMatchNo="12"/>
        </Carousel>
        </div>

    )
}


export default Home;