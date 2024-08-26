import Carousel from "./Carousel.tsx";
import ScoreCard from "./ScoreCard.tsx";

const Home  = ()=>{
    return (
        <div className="home-page">
        <h1>
            Home page will be rendered
        </h1>
        <Carousel simultanousCards="1">

            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
        </Carousel>
        </div>

    )
}


export default Home;