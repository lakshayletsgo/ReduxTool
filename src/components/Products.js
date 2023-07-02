import { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import { Alert } from 'react-bootstrap';

 const Products=()=> {
    const dispatch =    useDispatch();
    const {data:product,status} = useSelector(state=>state.products)

    useEffect(()=>{
        dispatch(getProducts())
    },[]);
    if(status==='Loading'){
        return <h1>Loading...</h1>
    }
    if(status==='error'){
        return<Alert key='danger' variant='danger'>
           Something Went Wrong!!!

        </Alert> 
    }

    const addToCart=(product)=>{
        dispatch(add(product))
    }
    const cards = product.map(product=>(
        <div className="col-md-3" style={{marginBottom:"10px"}} key={product.id}>
            <Card key={product.id} className='h-100'>
                <div className="text-center">

                <Card.Img variant="top" src={product.image} style={{width:"100px", height:"130px"}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>

                </Card.Footer>
            </Card>

        </div>
    ))
  return (
    <>
    <h1>Product DashBoard</h1>
        <div className="row">
        {cards}
        </div>
    </>
  )
}

export default Products;