import React from 'react';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import { VictoryPie } from 'victory';

const Sources = ({ storeData }) => {
    let totalPhones = storeData.length;
    const daraz = storeData.filter((item) => item.seller_name === 'Daraz').length;
    const pickaboo = storeData.filter((item) => item.seller_name === 'Pickaboo').length;
    const bikory = storeData.filter((item) => item.ad_category === 'Bikroy.com').length;

    // Percentage calculate
    const percentageOfDaraz = Math.round((daraz / totalPhones) * 100);
    const percentageOfPickaboo = Math.round((pickaboo / totalPhones) * 100);
    const percentageOfBikory = Math.round((bikory / totalPhones) * 100);

    // Pie chart data
    const pieData = [
        { x: 'Daraz', y: percentageOfDaraz },
        { x: 'Picaboo', y: percentageOfPickaboo },
        { x: 'Bikroy', y: percentageOfBikory },
    ];

    const colorScale = ['#84AF27', '#FFC239', '#0095A0'];

    return (
        <div className="sources-data">
            <VictoryPie colorScale={colorScale} data={pieData} />
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
