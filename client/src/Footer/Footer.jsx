import React from 'react';
import Logo from '../assets/favicon.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook-share-icon.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram-share-icon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin-share-icon.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter-share-icon.svg';
import { ReactComponent as YoutubeIcon } from '../assets/youtube-share-icon.svg';
import { ContactUsContainer, DetailsContainer, FooterContainer, ShareIconsContainer } from './Footer.style';

export function Footer() {
    return (
        <FooterContainer>
            <img src={Logo} alt={'N'}/>
            <ContactUsContainer>
                Contact us
                <DetailsContainer>
                    <span>
                        support@nextmovies.com
                    </span>
                    <span>
                        Mon – Fri | 6:00am – 5:00 pm PT
                    </span>
                </DetailsContainer>
                <ShareIconsContainer>
                    <FacebookIcon />
                    <LinkedinIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <YoutubeIcon />
                </ShareIconsContainer>
            </ContactUsContainer>
        </FooterContainer>
    )
}