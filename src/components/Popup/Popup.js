import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const Popup = (props) => {
    const [inputData, setInputData] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(inputData);
    };

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let newInputData = { ...inputData };
        newInputData[name] = value;
        setInputData(newInputData);
    };

    return (
        <div>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Add Product</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleFormSubmit}>
                    <Modal.Body>
                        <div className="mb-3">
                            <Form.Label htmlFor="productName">Product Name</Form.Label>
                            <Form.Control
                                onChange={handleOnChange}
                                type="text"
                                name="pname"
                                placeholder="Enter product name"
                            />
                        </div>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label htmlFor="brand">Brand</Form.Label>
                                <Form.Control
                                    onChange={handleOnChange}
                                    type="text"
                                    name="brand"
                                    placeholder="Enter brand name"
                                />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="ram">Ram/Rom</Form.Label>
                                <Form.Control
                                    onChange={handleOnChange}
                                    type="text"
                                    name="ram"
                                    placeholder="Enter Ram"
                                />
                            </Col>
                        </Row>
                        <div className="mb-3">
                            <Form.Label htmlFor="tags">Tags</Form.Label>
                            <Form.Select
                                onChange={handleOnChange}
                                name="tags"
                                multiple
                                aria-label="Default select example"
                            >
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="price">Price</Form.Label>
                            <Form.Control
                                onChange={handleOnChange}
                                type="text"
                                name="price"
                                placeholder="Enter price"
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Cancel</Button>
                        <Button type="submit" variant="success">
                            Publish
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
};

export default Popup;
