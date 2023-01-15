import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

import TableBody from './TableBody';
import TableHead from './TableHead';


const targetUrl = 'https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:77453/schedules.json?api_key=qjpvxc8hvtwyutz2vsk95qrt';


function ResultsTable() {

    const [allCompetitions, setAllCompetitions] = useState([]);

    const getData = () => {
        fetch(`http://localhost:3003/${targetUrl}`)

            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAllCompetitions(data.schedules)
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="App">
            <table>
                <TableHead />
                <TableBody competitions={allCompetitions} />
            </table>
        </div>
    );
}


export default ResultsTable;