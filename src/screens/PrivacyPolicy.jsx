import styled from "styled-components";

const PrivacyPolicy = () => {
    return ( 
    <PrivacyPolicy>
        <HeaderP>Privacy Policy for Klean Klub Mobile App</HeaderP>

    </PrivacyPolicy>
     );
}
 
export default PrivacyPolicy;

const PrivacyPolicyWrapper = styled.div`
    height:100vh;
    width:100vw;
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;