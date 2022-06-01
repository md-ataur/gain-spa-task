import React from 'react';
import { Container } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { VictoryBar, VictoryChart } from 'victory';
import Sources from '../Sources/Sources';

const dataBar = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
];

const Dashboard = () => {
    /* const [storeData, setStoreData] = useState([]);

    useEffect(() => {
        fetch('./api-data.json')
            .then((res) => res.json())
            .then((data) => setStoreData(data));
    }, []); */

    return (
        <div>
            <header className="header-bar">
                <Container className="d-flex justify-content-between">
                    <div className="logo">
                        <h2>Logo</h2>
                    </div>
                    <div className="right-bar">
                        <div className="search-bar">
                            <input type="text" placeholder="Search by Title or Brand" />
                            <span className="search-icon">
                                <FiSearch />
                            </span>
                        </div>
                        <button className="addbtn">Add Product</button>
                    </div>
                </Container>
            </header>
            <Container className="mx-auto">
                <div className="chart-area">
                    <div className="sources-area">
                        <h3>Sources</h3>
                        <Sources />
                    </div>
                    <div className="conditions">
                        <h3>Conditions</h3>
                        <VictoryChart domainPadding={20}>
                            <VictoryBar data={dataBar} x="quarter" y="earnings" />
                        </VictoryChart>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;
