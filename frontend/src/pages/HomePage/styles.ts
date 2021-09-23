import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    margin-top: 40px;
    width: 100%;
    overflow: auto;
    height: auto;
    height: calc(100vh -150px);
  }
`
export const CardArea = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(254px,1fr));
    grid-gap:30px
  }
`
export const CardAreaColumn = styled.div`
    flex: 1 ;
    border-radius: 3px;
    padding:  20px;
    align-items: center;
    position: relative;
  }
`
export const HeroCard = styled.div`
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    border: 1px groove rgba(175, 31, 36, 0.4);
    border-radius:10px;
    width: 100%;
    height:100%;
    flex-direction: column;

  }
`
export const HeroNome = styled.div`
text-transform: uppercase;
font-weight: bold;
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;
top:0;

  }
`
export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  top:10px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
`
export const ModalBody = styled.div`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
`





