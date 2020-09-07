import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import CandidateList from './pages/CandidateList';
import CandidateForm from './pages/CandidateForm';
import CompanyList from './pages/CompanyList';
import CompanyForm from './pages/CompanyForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/candidatas" component={CandidateList} />
      <Route path="/cadastro-candidata" component={CandidateForm} />
      <Route path="/provas" component={CompanyList} />
      <Route path="/cadastro-prova" component={CompanyForm} />
    </BrowserRouter>
  );
}

export default Routes;
