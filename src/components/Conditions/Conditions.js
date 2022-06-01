import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';

const Conditions = ({ storeData }) => {
    const official = storeData.filter((item) => item.official_warranty === true).length;
    const unOfficial = storeData.filter((item) => item.unofficial_warranty === true).length;
    const noWarranty = storeData.filter((item) => item.no_warranty === true).length;
    const usedPhone = storeData.filter((item) => item.used_phone === true).length;

    // Bar chart data
    const barData = [
        { quarter: 'Official', earnings: official },
        { quarter: 'Unofficial', earnings: unOfficial },
        { quarter: 'Without Warranty', earnings: noWarranty },
        { quarter: 'Used', earnings: usedPhone },
    ];

    return (
        <div className="conditions-data">
            <VictoryChart domainPadding={25}>
                <VictoryBar
                    style={{ data: { fill: '#0095A0' } }}
                    barRatio={0.3}
                    alignment="start"
                    data={barData}
                    x="quarter"
                    y="earnings"
                />
            </VictoryChart>
        </div>
    );
};

export default Conditions;
