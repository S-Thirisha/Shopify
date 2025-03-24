const Products = ({ image, title, price, description,setCount }) => {
     
    return (
        <>
            <img src={image} alt={title} className="image" />
            <p className="title">{title}</p>
            <p className="price">Price: ${price}</p>
            <p className="description">{description.slice(0,100)}</p>
            <button   className='add'onClick={()=>{setCount(prev=>prev+1) }}>Add to Cart</button>
            
            
        </>

    )
}
export default Products;