import React from 'react';
import { FooterBase } from './styles';
import forum from '../../assets/images/icons/discord2.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://discord.gg/WUUPwu">
        <img src={forum} alt="Discord" />
      </a>
      <p>Entre para nossa comunidade no discord!</p>
    </FooterBase>
  );
}
export default Footer;
