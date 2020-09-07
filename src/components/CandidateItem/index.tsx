import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

export interface Candidate {
  id: number;
  linkedin: string;
  github: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface CandidateItemProps {
  candidate: Candidate;
}

const CandidateItem: React.FC<CandidateItemProps> = ({ candidate }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: candidate.id,
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <a href={candidate.linkedin} > >LinkedIn</a>
        <a href={candidate.github}>GitHub</a>
        <div>
          <strong>{candidate.name}</strong>
          <span>{candidate.subject}</span>
        </div>
      </header>

      <p>{candidate.bio}</p>

      <footer>
        <p>
          Salário médio desejado:
          <strong>R$ {candidate.cost}</strong>
        </p>
        <a 
          target="_blank" 
          onClick={createNewConnection} 
          href={`https://wa.me/${candidate.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default CandidateItem;