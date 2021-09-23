import clsx from 'clsx'
import { useCallback, useEffect, useRef } from 'react'
import { useLockBodyScroll } from 'react-use'
import { Product } from '../../pages/HomePage/index'
import {Main, Container,Modal_overlay,Button, Title}from './styles'

type Prop = {
  isOpen: boolean;
  product: Product |null;
  handleClose: any
}

const Modal: React.FC<Prop> = ({ isOpen, product, handleClose }) => {
  const overlay = useRef<HTMLDivElement>(null)
  useLockBodyScroll(isOpen)

  const handleClick = useCallback(() => {
    handleClose()
  }, [handleClose])

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose],
  )

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)
  }, [escFunction])

  return (
    <>
      <>
        <Main className={clsx(Main, isOpen && 'isShow')}>
          <Modal_overlay
            ref={overlay}
            onClick={handleClick}
          ></Modal_overlay>
          <Container>
            <Title>{product?.barcode}</Title>
            <p><b>Status:</b> {product?.status}</p>
            <p><b>Packaging:</b> {product?.packaging}</p>
            <p><b>Brans:</b> {product?.brands}</p>
            <Button className="Button" onClick={handleClose}>
              Sair
            </Button>
          </Container>
        </Main>
      </>
    </>
  )
}

export default Modal
