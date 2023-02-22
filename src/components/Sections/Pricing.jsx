import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Privacy Policy for Klean Klub Mobile App</h1>
            <p className="font13">
            <h3>Introduction</h3>
            <br/>
            Klean Klub (hereinafter referred to as "the App" or "we") is committed to protecting the privacy and security of your personal information. This privacy policy describes how we collect, use, and disclose your personal information when you use our mobile application.

            <br/>
            <br/>
            <br/>
            <h3>Information We Collect</h3>
            <br/>

            When you use the App, we may collect the following types of information:

            Personal Information: This includes your name, email address, phone number, gender, and location information, which is necessary for us to provide our cleaning services and process payments.

            Usage Information: We may collect information about how you use the App, including the pages you visit, the time and date of your visit, and the actions you take while using the App.

            Device Information: We may collect information about your mobile device, including the type of device you use, your device's unique identifier, and your device's operating system.

            <br/>
            <br/>
            <br/>
            <h3>How We Use Your Information</h3>
            <br/>
            We may use your personal information to:

            Provide our cleaning services to you;

            Process your payments and manage your account;

            Communicate with you about your account or our services;

            Analyze how you use the App and improve our services;

            Comply with legal obligations.

            We may use your usage and device information to analyze how users interact with our App and improve our services.
            
            <br/>
            <br/>
            <br/>
            <h3>Disclosure of Your Information</h3>
            <br/>
            We may share your personal information with the following parties:
            <br/>
            <br/>
            Service Providers: We may share your personal information with third-party service providers who perform services on our behalf, such as processing payments, analyzing usage data, or providing customer support.
            <br/>  
            <br/>  
            Klean Klub Agencies: We may share your personal information with agencies on klean klub to make it possible for them to render services for you.
            <br/>  
            <br/>  
            Legal Requirements: We may disclose your personal information if we are required to do so by law, or if we believe that such disclosure is necessary to comply with legal obligations, protect our rights or interests, or prevent fraud or other illegal activity.
            <br/>   
            <br/>   
            Business Transfers: If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction.
            
            <br/>
            <br/>
            <br/>
            <h3>Data Security</h3>
            <br/>
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, and alteration. However, no method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee absolute security.

            <br/>
            <br/>
            <br/>
            <h3>Your Choices and Rights</h3>
            <br/>
            You can access, correct, or delete your personal information at any time by contacting us at <span style={{fontWeight:"700"}}>kleanklub.official@gmail.com</span>. You can also choose not to provide us with certain personal information, but this may limit your ability to use certain features of the App.

            <br/>
            <br/>
            <br/>
            <h3>Changes to Our Privacy Policy</h3>
            <br/>
            We may update this privacy policy from time to time. If we make material changes to this policy, we will notify you by email or by posting a notice on the App.

            <br/>
            <br/>
            <br/>
            <h3>Contact Us</h3>
            <br/>
            If you have any questions or concerns about our privacy policy, please contact us at <span style={{fontWeight:"700"}}>kleanklub.official@gmail.com</span>.


            </p>
          </HeaderInfo>
          {/* <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$29,99/mo"
                title="Starter"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Product Offer", cheked: true },
                  { name: "Offer", cheked: true },
                  { name: "Product Offer #2", cheked: false },
                  { name: "Product", cheked: false },
                  { name: "Product Offer", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$49,99/mo"
                title="Basic"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Product Offer", cheked: true },
                  { name: "Offer", cheked: true },
                  { name: "Product Offer #2", cheked: true },
                  { name: "Product", cheked: true },
                  { name: "Product Offer", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$59,99/mo"
                title="Golden"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Product Offer", cheked: true },
                  { name: "Offer", cheked: true },
                  { name: "Product Offer #2", cheked: true },
                  { name: "Product", cheked: true },
                  { name: "Product Offer", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper> */}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




