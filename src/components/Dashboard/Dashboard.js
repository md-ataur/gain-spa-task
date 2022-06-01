import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import Conditions from '../Conditions/Conditions';
import Popup from '../Popup/Popup';
import Sources from '../Sources/Sources';

const Dashboard = () => {
    const [storeData, setStoreData] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    // Data load from api
    useEffect(() => {
        fetch('./api-data.json')
            .then((res) => res.json())
            .then((data) => setStoreData(data));
    }, []);

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
                        <button onClick={() => setModalShow(true)} className="addbtn">
                            Add Product
                        </button>
                    </div>
                </Container>
            </header>
            <Container className="mx-auto">
                <div className="chart-area">
                    <Row>
                        <Col>
                            <h3>Sources</h3>
                            <Sources storeData={storeData} />
                        </Col>
                        <Col>
                            <h3>Conditions</h3>
                            <Conditions storeData={storeData} />
                        </Col>
                    </Row>
                </div>
                <Popup show={modalShow} onHide={() => setModalShow(false)} />
            </Container>
        </div>
    );
};

export default Dashboard;
