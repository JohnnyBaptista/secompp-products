import React, { useEffect, useState } from "react";
import {
  ProductCard,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
  ProductContainer,
} from "./ProductStyles";

import { useCart } from "cart/CartsContext";

type ProductType = {
  title: string;
  description: string;
  id: number;
  price: number;
  quantity: number;
};

const Products: React.FC<{ products: ProductType[] }> = ({ products }) => {
  const { cart, addToCart } = useCart();
  if (products.length === 0) {
    return <div>Não há produtos</div>;
  }
  return (
    <>
      <ul>
        <ProductContainer>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>Price: ${product.price}</ProductPrice>
              <AddToCartButton onClick={() => addToCart(product)}>
                Adicionar ao carrinho
              </AddToCartButton>
            </ProductCard>
          ))}
        </ProductContainer>
      </ul>
    </>
  );
};

export default Products;
