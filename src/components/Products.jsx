import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function Products() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const location = useLocation();
    
    // Get the search query from the URL
    const searchQuery = new URLSearchParams(location.search).get('search');

    const getApiData = async () => {
        try {
            const res = await axios.get("https://api.sofia.digiindiasolutions.com/api/get-all-category");
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    // Filter the data based on the search query
    useEffect(() => {
        if (searchQuery) {
            const filtered = data.filter(product =>
                product.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [searchQuery, data]);

    return (
        <div className="container-fluid">
            <div className="row py-4 px-3 px-md-5 card-category">
                {filteredData.length > 0 ? (
                    filteredData.map((product, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="category-card">
                                <img alt={product.alt} className="img-fluid" src={`https://api.sofia.digiindiasolutions.com/${product.categoryImage}`} width="250" height="230" />
                                <div className="category-title">
                                    {product.categoryName}
                                </div>
                                <div className="btn-group">
                                    <Link to={`/Implants/${product.categoryName}`}>
                                        <button className="btn btn-primary btn2">
                                            Implants
                                        </button>
                                    </Link>
                                    <Link to={`/Instruments/${product.categoryName}`}>
                                        <button className="btn btn-primary btn1">
                                            Instruments
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <h3>No products found</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;