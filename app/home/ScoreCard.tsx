import Tooltip from "./Tooltip"

interface ScoreCardsProps{
    dummyMatchNo: string| number
}


const ScoreCard = ({dummyMatchNo}:ScoreCardsProps)=>{

    return (<div className="score-card-container w-80 border-2 rounded-lg mr-6 p-3 shrink-0">
        <Tooltip text="The match between Englad and shrilanka was plyed on">
        <div className="score-card-header">
            <div className="match-staus">LIVE</div>
            <div className="match-staus">{dummyMatchNo} Test</div>
            <div className="match-staus">Manchester</div>
        </div>
        </Tooltip>
        
        <div className="score">
            <div className="team-1-result">
                <div className="team-name">Eng</div>
                <div className="team-score">236 & 226</div>

            </div>
            <div className="team-2-result">
            <div className="team-1-result">
                <div className="team-name">SL</div>
                <div className="team-score">358  & 205/5</div>

            </div>
            </div>

        </div>
      
    </div>)


}


export default ScoreCard;

