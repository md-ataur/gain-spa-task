import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const Popup = (props) => {
    const [pname, setPname] = useState('');
    const [brand, setBrand] = useState('');
    const [ram, setRam] = useState('');
    const [tags, setTags] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newObj = {
            pname: pname,
            brand: brand,
            ram: ram,
            tags: tags,
            price: price,
        };

        setProducts(newObj);

        console.log(newObj);
    };

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify([products]));
    }, [products]);

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
                                onChange={(e) => setPname(e.target.value)}
                                type="text"
                                name="pname"
                                required
                                placeholder="Enter product name"
                            />
                        </div>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label htmlFor="brand">Brand</Form.Label>
                                <Form.Control
                                    onChange={(e) => setBrand(e.target.value)}
                                    type="text"
                                    name="brand"
                                    required
                                    placeholder="Enter brand name"
                                />
                            </Col>
                            <Col>
                                <Form.Label htmlFor="ram">Ram/Rom</Form.Label>
                                <Form.Control
                                    onChange={(e) => setRam(e.target.value)}
                                    type="text"
                                    name="ram"
                                    required
                                    placeholder="Enter Ram"
                                />
                            </Col>
                        </Row>
                        <div className="mb-3">
                            <Form.Label htmlFor="tags">Tags</Form.Label>
                            <Form.Select
                                name="tags"
                                onChange={(e) =>
                                    setTags(
                                        Array.from(e.target.options)
                                            .filter((option) => option.selected)
                                            .map((option) => option.value)
                                    )
                                }
                                multiple
                                required
                            >
                                <option value="Best Value">Best Value</option>
                                <option value="Best Camera">Best Camera</option>
                                <option value="Best Performance">Best Performance</option>
                            </Form.Select>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="price">Price</Form.Label>
                            <Form.Control
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                                name="price"
                                required
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
