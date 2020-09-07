import React from 'react';
import { PartnerDiv } from './styles';
import companies from '../../assets/images/icons/partners.png';

function Partner() {
  return (
    <PartnerDiv>
      <p>Alguns de nossos parceiros</p>
      <a>
        <img src={companies} alt="Empresas Parceiras" />
      </a>
    </PartnerDiv>
  );
}
export default Partner;
