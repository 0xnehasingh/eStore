import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    //export default class ProductList extends Component {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="row">
                    <div className="col text-center py-3">
                        <p>&copy; 2023 0xnehasingh.eth</p>
                        <div>
                            <a href="https://github.com/0xnehasingh" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github mx-2"></i>
                            </a>
                            <a href="https://www.instagram.com/0xnehasingh.eth/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram mx-2"></i>
                            </a>
                            <a href="https://twitter.com/0xnehasingh" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter mx-2"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/neha-singh-0xnehasingh-eth-60b4451a9/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin mx-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    background: transparent;
    color: white;
    text-align: center;
    padding: 1rem 0;

    a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
    }

    a:hover {
        color: #fff; /* Change color on hover if desired */
    }
`;

export default Footer;
