import Carousel from "./Carousel.tsx";
import ScoreCard from "./ScoreCard.tsx";
import TabGroup from "./TabGroup.tsx";


/*
interface tabContentType {
    key:string | number,
    label:string,
    content:ReactNode,
   


*/

const Home  = ()=>{

    const tabContent =[{
        "key":1,
        "label": "Eng Vs SL",
        content:<div>Srilanka tour of england details</div>
    },
    {
        "key":2,
        "label": "Pak Vs Ban",
        content:<div>Bangladesh tour of Pakistan details</div>
    },
    {
        "key":3,
        "label": "SPL 2024",
        content:<div>CPL 2024 details</div>
    }]
    return (
        <div className="home-page">
        <h1>
            Home page will be rendered
        </h1>
        <Carousel simultanousCards="4" cycle={false}>

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
            <ScoreCard dummyMatchNo="13" />
            <ScoreCard  dummyMatchNo="14"/>
        </Carousel>

        <TabGroup   tabContent ={tabContent} defaultActiveTab={1} />


       

        </div>

    )
}


export default Home;