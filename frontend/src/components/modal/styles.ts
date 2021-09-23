import styled from 'styled-components'
export const Modal_overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: black;
opacity: 0.5;
}
`
export const Main = styled.div`
opacity: 0;
visibility: hidden;
&&.isShow {
  opacity: 1;
visibility: visible;
transition: opacity 0.25s ease, visibility 0.25s ease;
}
}
`
export const IsShow = styled.div`
opacity: 1;
visibility: visible;
transition: opacity 0.25s ease, visibility 0.25s ease;
}
`

export const Container = styled.div`
position: absolute;
z-index: 9999;
padding: 20px 20px 20px;
width: 400px;
height: auto;
background-color: #fff;
border: 3px solid #ddd;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align:justify;
}
`
export const Title = styled.h2`
margin: 0;
padding:10px;
}
`

export const Button = styled.button`
border: none;
color: white;
cursor: pointer;
font-weight: bold;
outline: none;
padding: 10px;
float: right;
background-color: #b71c1c;
margin-top:20px;
}
`




