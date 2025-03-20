import { useState, useEffect } from "react";
import axios from "axios"
import Products from "./Products";
import Tabs from "./tabs";
const ProductList = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [filteredProducts,setFilteredProducts]=useState([]);
    const [isFiltered,setisFiltered]=useState(false)
    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log(response.data);
            setData(response.data);
            setLoading(false)
        }
        catch (error) {
            console.log(error)
            setError(error.message)
            setLoading(false)
        }

    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    if (isLoading) {
        return <div>Loading..</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <>
            <h1 className="shopify">Shopify</h1>
            <Tabs 
            data={data}
             setFilteredProducts={setFilteredProducts}
             setisFiltered={setisFiltered}/>
            {/* {console.log(filteredProducts)} */}

           {isFiltered ?
           <div className="container">
                {
                    filteredProducts.map((product, index) => (
                        <div key={index}  className="product">
                            <Products
                                {...product}

                            />
                        </div>
                    ))
                }
            </div> :
            <div className="container">
            {
                data.map((product, index) => (
                    <div key={index}  className="product">
                        <Products
                            {...product}

                        />
                    </div>
                ))
            }
        </div>}
        </>
    )
}
export default ProductList;