import React from 'react';
import MainContext from "../../contexts/main.context";
import Card from '@mui/material/Card';
import {CardContent} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Products = () => {
  const { products, updateShoppingCart, shoppingCart } = React.useContext(MainContext);
  const pushNewProduct = (product) => {
    const newCart = [...shoppingCart, product]
    updateShoppingCart(newCart);
  };

  const removeProduct = (product) => {
    const index = shoppingCart.findIndex((p) => p.id === product.id);
    shoppingCart.splice(index, 1);
    updateShoppingCart([...shoppingCart]);
  };
	return (
    <section style={{margin: 'auto'}}>
      {products.map(product => (
        <Card key={product.id} style={{margin: 20}}>
          <CardContent>
            <div>{product.name}</div>
            <img
              src={product.img}
              alt={product.name}
            />
            <div className='icons'>
              <AddCircleIcon onClick={() => pushNewProduct(product)}/>
              <RemoveCircleIcon onClick={() => removeProduct(product)}/>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
};


export default Products;

