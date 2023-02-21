import { Button } from "@mui/material";
import { useRef } from "react";
import styled from "styled-components";

const AdminPage = () => {
    const keyRef = useRef();
    return ( 
        <Wrapper>
            <InputWrapper>
                <Input ref={keyRef}></Input>
                <Button style={{background:"#FD6B22", color:"white", marginTop: "30px", paddingLeft:"30px", paddingRight:"30px"}}>Submit</Button>
            </InputWrapper>
        </Wrapper>
    );
}
 
export default AdminPage;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F4F4F4;
`;

const InputWrapper = styled.div`
background: #FFFFFF;
border: 0.8px solid #0;
border-radius: 10px;
width: 480px;
height: 262px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Input = styled.input`
background: #FFFFFF;
border: 1px solid #9A9FA5;
border-radius: 4px;
width: 400px;
height: 48px;

`;