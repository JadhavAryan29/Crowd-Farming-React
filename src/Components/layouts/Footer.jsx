/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3  col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>India</li>
                <li>Shankarpally +91 9999955555</li>
                <li>Nashik +91 8888844444</li>
                <li>cf@highlife.com</li>
              </ul>
            </div>
            <div className="col-md-3  col-sm-6">
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a href="/">Home</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/news">News</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/contact">Contact</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/notfound"> Not Found</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-3  col-sm-6">
              <h4>Guide</h4>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a href="/">Getting Started</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/details">Details</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">Our Work</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">About Us</a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-3  col-sm-6">
              <h4>Other Information</h4>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a href="/">Privacy Policy</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">Terms & Conditions</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">Genaral Queries</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">FAQ</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Crowd Farming By Highlife - All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

// Let's Create a Variable and inside it we can style our footer
// 1rem =16px

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainlightGrey);
  }

  .footer-bottom {
    color: var(--mainGrey);
  }
`;
