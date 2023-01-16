import React from 'react';

let infosToDisplay = [];



///////////////////background color display functions
const teamHomeCellBackgroundColor = (competition) => {
    if (competition.sport_event_status.match_status === 'ended') {
        if (competition.sport_event_status.home_score > competition.sport_event_status.away_score) {
            return 'green'
        } else if (competition.sport_event_status.home_score < competition.sport_event_status.away_score) {
            return 'red'
        } else {
            return 'orange'
        }
    }
}


const teamAwayCellBackgroundColor = (competition) => {
    if (competition.sport_event_status.match_status === 'ended') {
        if (competition.sport_event_status.home_score < competition.sport_event_status.away_score) {
            return 'green'
        } else if (competition.sport_event_status.home_score > competition.sport_event_status.away_score) {
            return 'red'
        } else {
            return 'orange'
        }
    }
}


function TableBody({ competitions }) {
    infosToDisplay = competitions.map(competition => {

        return (
            <tr key={competition.sport_event.id}>
                {/* display team names */}
                <td style={{ backgroundColor: teamHomeCellBackgroundColor(competition) }}>
                    {competition.sport_event.competitors[0].name}
                </td>
                <td style={{ backgroundColor: teamAwayCellBackgroundColor(competition) }}>
                    {competition.sport_event.competitors[1].name}
                </td>

                {/* display result */}
                {/* home_score : away_score */}
                {competition.sport_event_status.match_status === 'ended' ? <td> {competition.sport_event_status.home_score} : {competition.sport_event_status.away_score}</td> : <td>-:-</td>}
                {/* <td> {competition.sport_event_status.home_score} : {competition.sport_event_status.away_score}</td> */}

                {/* display date */}
                <td>
                    {
                        competition.sport_event.start_time.slice(0, 10)
                    }
                </td>
                {/* display half time score */}

                {
                    competition.sport_event_status.period_scores ?
                        <td>{competition.sport_event_status.period_scores.map(score => {

                            return (
                                <p>{score.home_score} : {score.away_score}</p>
                            )
                        })}</td> :

                        <td>-:-</td>

                }
                {/* display stadium name */}
                <td>
                    {
                        competition.sport_event.venue.name
                    }
                </td>
            </tr >
        )
    })

    return (
        <tbody>
            {infosToDisplay}
        </tbody>
    )
}

export default TableBody;