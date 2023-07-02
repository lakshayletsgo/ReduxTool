import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { remove } from '../store/cartSlice'



export default function Cart() {
    const productCart = useSelector(state=>state.cart)
    const dispatch = useDispatch();
    const removeItem = (id)=>{
        dispatch(remove(id))
    }
    const cards = productCart.map(product=>(
        <div className="col-md-12" style={{marginBottom:"10px"}} key={product.id}>
            <Card  className='h-100'>
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
                    <Button variant="danger" onClick={()=>removeItem(product.id)} >Remove Item</Button>

                </Card.Footer>
            </Card>

        </div>
    ))
  return (
    <div>
        <div className="row">

        {cards}
        </div>
    </div>
  )
}
