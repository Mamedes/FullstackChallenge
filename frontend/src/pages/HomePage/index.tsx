import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api'
import Header from "../../components/header";
import Modal from '../../components/modal';

import {
  Container,
  CardArea,
  HeroCard,
  HeroNome,
  HeroImage,

} from './styles'

export interface Product {
  id: number;
  code: string;
  barcode: string;
  status: string;
  imported_t: Date;
  url: string;
  product_name: string;
  quantity: string;
  packaging: string;
  brands: string;
  image_url: string;
}

export function HomePage() {
  const [products, setProduct] = useState<Product[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [showMember, setShowMember] = useState<Product | null>(null)


  useEffect(() => {
    async function getProduct() {
      const page = 1;
      const limit = 10;
      const response = await api.get('/products',{
        params:{
          page: page,
          limit:limit,
        },
      });
      setProduct(response.data.product);

    }

    getProduct();
  }, []);

  const handleClick = useCallback((product) => {
    setShowMember(product)
    setIsOpenModal(true)
  }, [setProduct])

  const handleClose = useCallback(() => {
    setIsOpenModal(false)
    setShowMember(null)
  }, [])


  return (
    <>
      <Header />
      <Container>
        <CardArea>
          {products.map((product, idx) => (
            <HeroCard key={product.id} onClick={() => handleClick(product)}>
              <HeroNome>
                <h5>{product.product_name}</h5>
              </HeroNome>
              <HeroImage>
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  className="heroImage"
                  style={{
                    flexShrink: 0,
                    height: 'auto'
                  }}
                />
              </HeroImage>
            </HeroCard>

          ))}
        </CardArea>
      </Container>
      {products &&
        <Modal
          isOpen={isOpenModal}
          handleClose={handleClose}
          product={showMember}
        />

      }
    </>
  );
};
export default HomePage
