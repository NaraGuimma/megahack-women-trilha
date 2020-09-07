import React from 'react';

import PageHeader from '../../components/PageHeader';

import Select from '../../components/Select';
import db from './candidates.json';

import './styles.css';

function CandidateList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estas são as áreas disponíveis.">
        <Select
          name="subject"
          label=""
          options={[
            {
              value: '0',
              label: 'Desenvolvedora Front-end',
            },
            {
              value: '1',
              label: 'Desenvolvedora Back-end',
            },
            {
              value: '2',
              label: 'Desenvolvedora Full Stack',
            },
            { value: '3', label: 'Analista de Dados' },
            { value: '4', label: 'UX/UI' },
            { value: '5', label: 'Cloud Computing' },
            { value: '6', label: 'DevOps / DevSecOps' },
            { value: '7', label: 'Analista de Sistema' },
            {
              value: '8',
              label: 'Engenheira de Software',
            },
          ]}
        />
      </PageHeader>

      <main>
        <ul>
          {db.map((candidata) => (
            <a className="card">
              <article>
                <h3 className="titulo">Nome: {candidata.name}</h3>

                <h1 className="titulo">LinkedIn: {candidata.linkedin}</h1>
                <h1 className="titulo">GitHub: {candidata.github}</h1>
                <h1 className="titulo">E-mail: {candidata.emai}</h1>
                <h1 className="titulo">Área de interesse: {candidata.area}</h1>
                <h1 className="titulo">{candidata.bio}</h1>
              </article>
            </a>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default CandidateList;
