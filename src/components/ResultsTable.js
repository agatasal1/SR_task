import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

import TableBody from './TableBody';
import TableHead from './TableHead';
import SeasonsDropdown from './SeasonsDropdown';
import '../css/Table.css'


import { Table } from 'react-bootstrap';


function ResultsTable() {

    const [allCompetitions, setAllCompetitions] = useState([]);

    const [seasonId, setSeasonId] = useState(['sr:season:77453'])

    const getData = () => {
        fetch(`http://localhost:3003/https://api.sportradar.us/soccer/trial/v4/en/seasons/${seasonId}/schedules.json?api_key=qjpvxc8hvtwyutz2vsk95qrt`)
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

    }, [seasonId])


    if (allCompetitions.length === 0) {
        return
    }

    return (
        <div className="table-responsive table-max-width">
            <h1 className='title'>Soccer - top league</h1>
            <SeasonsDropdown setSeasonId={setSeasonId} />
            <Table bordered hover size="sm" variant="dark" borderless>
                <TableHead />
                <TableBody competitions={allCompetitions} />
            </Table>
        </div >
    );
}


export default ResultsTable;