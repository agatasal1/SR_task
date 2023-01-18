import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

const targetUrl = 'https://api.sportradar.us/soccer/trial/v4/en/competitions/sr:competition:202/seasons.json?api_key=qjpvxc8hvtwyutz2vsk95qrt'

function SeasonsDropdown({ setSeasonId }) {

    const [dataSeasons, setDataSeasons] = useState([])
    const [selectedOption, setSelectedOption] = useState('');

    const getData = () => {
        fetch(`http://localhost:3003/${targetUrl}`)

            .then(response => response.json())
            .then(data => {
                setDataSeasons(data.seasons)
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData();
    }, [])

    const handleChange = (event) => {
        setSelectedOption(event.target.value)

        // seasonId change for url    
        dataSeasons.forEach(season => {
            if (season.name === event.target.value) {
                setSeasonId(season.id)
            }
        })

    }
    return (

        <select onChange={handleChange} value={selectedOption}>
            {dataSeasons.map((season) => {
                return (
                    <option key={season.id} value={season.name}> {season.name}</option>
                )
            })}
        </select>
    )




}

export default SeasonsDropdown;