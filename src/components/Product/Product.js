import React from 'react';

const Product = ({ sortingProducts }) => {
    return (
        <>
            <tbody>
                {sortingProducts.length > 0 &&
                    sortingProducts.map((data) => (
                        <tr key={data._id}>
                            <td className="d-flex align-items-center mb-4">
                                <div className="me-4">
                                    <img src={data.phone_images[0]} width="100px" alt="" />
                                </div>
                                <div className="ptitle">
                                    <h5>{data.phone_title}</h5>
                                    <span>{data.brand}</span>
                                </div>
                            </td>
                            <td>
                                <span>
                                    {data.ram}/{data.storage}
                                </span>
                            </td>
                            <td className="tagsName">
                                {(data.phone_price <= 20000 &&
                                    data.ram >= '4' &&
                                    data.storage >= '64' &&
                                    data.brand === 'Xiaomi') ||
                                data.brand === 'Realme' ? (
                                    <span>Best Value</span>
                                ) : (
                                    ''
                                )}

                                {data.phone_details.chipset.includes('Snapdragon') &&
                                data.phone_price > 20000 &&
                                data.ram > '4' &&
                                data.storage >= '128' &&
                                data.speciality[4] === '1080p display' ? (
                                    <span>Best Performance</span>
                                ) : (
                                    ''
                                )}

                                {parseInt(
                                    data.phone_details.mainCamera.split(',')[0].match(/\d+/g)[0]
                                ) >= 16 &&
                                parseInt(
                                    data.phone_details.selfieCamera.split(',')[0].match(/\d+/g)[0]
                                ) >= 13 &&
                                data.storage >= '64' &&
                                data.phone_details.external.includes('microSDXC') ? (
                                    <span>Best Camera</span>
                                ) : (
                                    ''
                                )}
                            </td>
                            <td>Tk.{data.phone_price}</td>
                        </tr>
                    ))}
            </tbody>
        </>
    );
};

export default Product;
