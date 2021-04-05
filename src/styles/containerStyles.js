import styled from "styled-components";
import "./font.css";

export const Grid = styled.div``;
export const GridLight = "backgroundColor: #f5f7fa;";

export const GridDark = `backgroundColor: #000;`;

export const Row = styled.div`
  display: flex;
`;

export const NavBarMessage = styled.span`
  color: #007f56;
  font-family: "Open Sans", sans-serif;
`;

export const Divider = styled.div`
  border-top: 1px solid gray;
`;

const media = {
  xs: (styles) => `@media only screen and (max-width: 480px) {
        ${styles}
    }`,
};

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

export const Card = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 400px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "green" : "red")};
  color: ${({ primary }) => (primary ? "white" : "white")};
  border: solid 2px #9f7500;
  border-radius: 8px;
  width: 5rem;
  padding: 0.2rem;
  margin: 0.2rem;
`;

export const popUP = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;
export const CM_CENTER_CENTER = Symbol('CM_CENTER_CENTER');
export const CM_TOP_LEFT = Symbol('CM_TOP_LEFT');
export const CM_TOP_CENTER = Symbol('CM_TOP_CENTER');
export const CM_TOP_RIGHT = Symbol('CM_TOP_RIGHT');
export const Container = styled.div` 
    position:fixed;
    background: antiquewhite;
    width: 33%;
    height: auto;
    
    top: ${({openPos}) => (
    {
        [CM_CENTER_CENTER]: '50%',
        [CM_TOP_LEFT]: '10%',
        [CM_TOP_CENTER]: '10%',
        [CM_TOP_RIGHT]: '10%'
    }[openPos])};
    
    left: ${({openPos}) => (
    {
        [CM_CENTER_CENTER]: '50%',
        [CM_TOP_LEFT]: '5%',
        [CM_TOP_CENTER]: '50%',
        [CM_TOP_RIGHT]: '95%'
    }[openPos])};
  
    transform: ${({openPos}) => (
    {
        [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
        [CM_TOP_LEFT]: 'translate(0,0)',
        [CM_TOP_CENTER]: 'translate(-50%,0)',
        [CM_TOP_RIGHT]: 'translate(-100%,0)'
    }[openPos])};
    border-radius: 10px;
    padding: 0.75rem;
    color: rgba(0,0,139, 0.9);
`;

export const Header = styled.div`
  font-size: calc(9px + 2vmin);
  color: rgba(0, 0, 139, 0.7); ;
`;

export const HBar = styled.div`
  width: 100%;
  height: 1px;
  border: solid 1px rgba(80, 80, 150, 0.4);
  background-color: rgba(80, 80, 150, 0.4);
`;

export const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: flex-end;
`;

export const Slot = styled.div`
  font-size: medium;
  color: inherit;
`;

export const Modal = styled.div`
display: none; 
position: fixed;
z-index: 1;
padding-top: 100px;
left: 0;
top: 0;
width: 100%; 
height: 100%;
overflow: auto;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);`;

export const ModalContent = styled.div`
background-color: #fefefe;
margin: auto;
padding: 20px;
border: 1px solid #888;
width: 80%;`;
