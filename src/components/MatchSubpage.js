import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import '../css/MatchSubpage.css'

function MatchSubpage() {

    const history = useHistory();
    const { id } = useParams();
    const [matchData, setMatchData] = useState([]);

    const url = `http://localhost:3003/https://api.sportradar.us/soccer/trial/v4/en/sport_events/${id}/timeline.json?api_key=qjpvxc8hvtwyutz2vsk95qrt
    `
    const getData = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMatchData(data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData();

    }, [])


    const handleClick = () => {
        history.push('/')
    }


    if (matchData.length === 0) {
        return
    }

    return (
        <div className='matchSubpage'>
            <h1>Match info</h1>
            <div className='matchInfo'>
                <p>{matchData.sport_event.competitors[0].name} : {matchData.sport_event.competitors[1].name}</p>
                <p>{matchData.sport_event.competitors[0].abbreviation} : {matchData.sport_event.competitors[1].abbreviation}</p>

                <p>{matchData.sport_event_status.home_score ? `${matchData.sport_event_status.home_score} : ${matchData.sport_event_status.away_score}` : null}</p>
            </div>
            <div>
                <h3>Timeline</h3>
                {matchData.timeline ? matchData.timeline.map((item) => {
                    return (

                        item.match_clock ?
                            <div key={item.id}>
                                <p>{item.match_clock.substring(0, item.match_clock.length - 3)}'  {item.type.replace(/_/g, " ")}</p>

                            </div> :
                            <div key={item.id}>
                                <p>{item.time.slice(11, 16)}  {item.type.replace(/_/g, " ")}</p>
                            </div>
                    )
                }) : null}
            </div>

            <button onClick={handleClick}>Go back</button>
        </div>
    );
}

export default MatchSubpage;