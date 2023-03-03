import React, { useEffect, useState } from 'react'
import './graph1.css'
import axios from 'axios';
import { XAxis, YAxis, CartesianGrid, LineChart, Line, ResponsiveContainer, BarChart, Tooltip, Bar } from 'recharts';


export default function Graph1() {
    const [mapData, setMapData] = useState({})




    useEffect(() => {
        axios.get('http://api.worldbank.org/v2/countries/IND/indicators/SP.POP.TOTL?per_page=5000&format=json')
            .then(res => {
                console.log(res.data[1])
                setMapData(res?.data[1])
                console.log("mapData====>", mapData)

            })

    }, []);


    return (
        <>

            <div className='graph1-container'>
              
                    <ResponsiveContainer id="respo">
                        <LineChart data={mapData} width={1000} height={500} >
                            <XAxis dataKey="date" />
                            <YAxis dataKey="value" width={100} />
                            <Tooltip />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
               
            </div>
            <div className='graph1-container'>
            <ResponsiveContainer id="respo">
                <BarChart data={mapData} width={1000} height={500}>
                    <XAxis dataKey="date" />
                    <YAxis dataKey="value" width={100} />
                    <Tooltip barSize={6} />
                    <Bar dataKey="value" fill="orange" barSize={2} />
                </BarChart>
                </ResponsiveContainer>

            </div >
        </>

    )
}
