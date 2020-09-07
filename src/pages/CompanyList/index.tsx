import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import db from './tests.json';

function CompanyList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os testes disponíveis.">
        Avalie seus conhecimentos
      </PageHeader>

      <main>
        <ul>
          {db.map((prova) => (
            <a className="cardComp" href={prova.teste}>
                <h3 className="titulo">{prova.title}</h3>
            </a>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default CompanyList;
