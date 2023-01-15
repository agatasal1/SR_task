import React from 'react';

let infosToDisplay = [];

function TableBody({ competitions }) {


    infosToDisplay = competitions.map(competition => {
        return (
            <tr key={competition.sport_event.id}>

                {/* display team names */}
                <td>{competition.sport_event.competitors.map(team => {
                    return (
                        <p key={team.id}>{team.name}</p>
                    )
                })}</td>
                {/* display result */}
                {competition.sport_event_status.home_score ?
                    <td> {competition.sport_event_status.home_score} : {competition.sport_event_status.away_score}</td> :
                    <td>no result</td>
                }
            </tr>
        )
    })

    return (
        <tbody>
            {infosToDisplay}
        </tbody>
    )
}

export default TableBody;