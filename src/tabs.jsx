const Tabs=({data,setFilteredProducts,setisFiltered})=>{
    const filterProducts=(categoryy)=>{
            const pro=data.filter(product=>product.category===categoryy)
            setFilteredProducts(pro);
            setisFiltered(true);
            console.log(pro);    
        }

    return(
        <>
        <ul className="filters">
                <li><button onClick={()=>{filterProducts("men's clothing")}}>Men's Clothing</button></li>
                <li><button onClick={()=>{filterProducts("women's clothing")}}>Women's Clothing</button></li>
                <li><button onClick={()=>{filterProducts("jewelery")}}>Jewelery</button></li>
                <li><button onClick={()=>{filterProducts("electronics")}}>Electronics</button></li>
                <li><button onClick={()=>{setisFiltered(false)}}>Clear filter</button></li>
            </ul>
        </>
    )
}
export default Tabs;