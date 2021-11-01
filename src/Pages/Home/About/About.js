import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-container pb-4">
      <Container>
        <div>
          <div>
            <h1 className="py-5 text-dark fw-bold">About Us</h1>
            <img className="about-img img-fluid" src="https://wallpaperaccess.com/full/185289.jpg" alt="" />
            <div className="about-body">

              <p className="details py-3">If you are looking for a reliable tour operator in Ukraine, “Green Tour Ukraine” is the right choice for you. Here are seven reasons why:

                Experience and Trustworthiness.
                Our company has been providing tour services since August 20, 2003 and we have gained a reputation of an expert in the Ukrainian incoming tourism market. More than 50 000 of tourist from all over the world have already visited our country with us and highly appreciated the level of service.

                Friendly and Qualified Stuff.
                All the members of our team are passionate about their work and always ready to help. We all enjoy travelling and believe that Ukraine is a great travel destination for you to explore. Just get in touch with us and we will assist you with planning a trip to Ukraine.

                Best Price, no Hidden Fees.
                We are glad to offer our clients the best rates on our tours, transfers and other services. Due to direct contracts with all our suppliers, our prices are always relevant and affordable.

                The Variety of Tours and Programs.
                We are especially proud of our selection of tours around Ukraine because it has no analogues in the market. Whether you want to make a multi-day trip to the Western Ukraine or just enjoy a fascinating 3-hour walking tour in Kiev, with us you will always find what you are looking for.

                The High Level of Service.
                Our clients’ satisfaction is our priority. That is why we work only with the best transport companies, qualified tour-guides, hotels and restaurants.

                Personal Approach to Each Client.
                We understand that there is no unique way to make a perfect journey that everyone will like because each person has his special needs and desires. We always listen to you first and then suggest the travel solution that is the best for you.


              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
