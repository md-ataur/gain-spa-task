import React, { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = ({ storeData, setStoreData }) => {
    const [sortingProducts, setSortingProducts] = useState([]);

    useEffect(() => {
        setStoreData(storeData);
        setSortingProducts(storeData);
    }, [storeData]);

    const onChangeHandle = (e) => {
        const selectValue = e.target.value;

        // All products
        if (selectValue === 'all-products') {
            setSortingProducts(storeData);
        }

        // Best value products
        if (selectValue === 'best-value') {
            const valueProducts = storeData.filter((item) => {
                if (
                    (item.phone_price <= 20000 &&
                        item.ram >= '4' &&
                        item.storage >= '64' &&
                        item.brand === 'Xiaomi') ||
                    item.brand === 'Realme'
                ) {
                    return item;
                }
            });

            setSortingProducts(valueProducts);
        }

        // Best camera products
        if (selectValue === 'best-camera') {
            const cameraProducts = storeData.filter((item) => {
                if (
                    parseInt(item.phone_details.mainCamera.split(',')[0].match(/\d+/g)[0]) >= 16 &&
                    parseInt(item.phone_details.selfieCamera.split(',')[0].match(/\d+/g)[0]) >=
                        13 &&
                    item.storage >= '64' &&
                    item.phone_details.external.includes('microSDXC')
                ) {
                    return item;
                }
            });

            setSortingProducts(cameraProducts);
        }

        // Best performance products
        if (selectValue === 'best-performance') {
            const performanceProducts = storeData.filter((item) => {
                if (
                    item.phone_details.chipset.includes('Snapdragon') &&
                    item.phone_price > 20000 &&
                    item.ram > '4' &&
                    item.storage >= '128' &&
                    item.speciality[4] === '1080p display'
                ) {
                    return item;
                }
            });

            setSortingProducts(performanceProducts);
        }
    };

    return (
        <>
            <div className="product-header">
                <h3>All Products</h3>
                <div className="d-flex align-items-center">
                    <div className="me-2">Sort by:</div>
                    <div>
                        <Form.Select onChange={onChangeHandle} aria-label="Default select example">
                            <option value="all-products">All Products</option>
                            <option value="best-value">Best Value</option>
                            <option value="best-camera">Best Camera</option>
                            <option value="best-performance">Best Performance</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
            <Table borderless>
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Ram/Rom</th>
                        <th>Tag</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <Product sortingProducts={sortingProducts} />
            </Table>
        </>
    );
};

export default Products;
