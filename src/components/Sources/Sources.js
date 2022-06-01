import React, { useEffect, useState } from 'react';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import { VictoryPie } from 'victory';

const colorScale = ['#84AF27', '#FFC239', '#0095A0'];

const Sources = () => {
    const [storeData, setStoreData] = useState([]);

    // Data load from api
    useEffect(() => {
        fetch('./api-data.json')
            .then((res) => res.json())
            .then((data) => setStoreData(data));
    }, []);

    // Percentage calculate
    let totalPhones = storeData.length;
    const daraz = storeData.filter((item) => item.seller_name === 'Daraz').length;
    const pickaboo = storeData.filter((item) => item.seller_name === 'Pickaboo').length;
    const bikory = storeData.filter((item) => item.ad_category === 'Bikroy.com').length;

    const percentageOfDaraz = Math.round((daraz / totalPhones) * 100);
    const percentageOfPickaboo = Math.round((pickaboo / totalPhones) * 100);
    const percentageOfBikory = Math.round((bikory / totalPhones) * 100);

    // Pie data
    const dataPie = [
        { x: 'Daraz', y: percentageOfDaraz },
        { x: 'Picaboo', y: percentageOfPickaboo },
        { x: 'Bikroy', y: percentageOfBikory },
    ];

    return (
        <div className="sources-data">
            <VictoryPie colorScale={colorScale} data={dataPie} />
            <div className="list-data">
                <p>
                    <span style={{ color: '#84AF27' }}>
                        <RiCheckboxBlankFill />
                    </span>
                    Daraz: {percentageOfDaraz}%
                </p>
                <p>
                    <span style={{ color: '#0095A0' }}>
                        <RiCheckboxBlankFill />
                    </span>
                    Bikroy: {percentageOfBikory}%
                </p>
                <p>
                    <span style={{ color: '#FFC239' }}>
                        <RiCheckboxBlankFill />
                    </span>
                    Picaboo: {percentageOfPickaboo}%
                </p>
            </div>
        </div>
    );
};

export default Sources;
