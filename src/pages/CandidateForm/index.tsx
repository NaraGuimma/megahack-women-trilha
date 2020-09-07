import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';

function CandidateForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGitHub] = useState('');

  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    history.goBack();
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Cadastre aqui seu currículo."
        description="Preencha o formulário e entre para nossa base de dados"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Input
              name="linkedin"
              label="Linkedin"
              value={linkedin}
              onChange={(e) => {
                setLinkedin(e.target.value);
              }}
            />

            <Input
              name="github"
              label="GitHub"
              value={github}
              onChange={(e) => {
                setGitHub(e.target.value);
              }}
            />

            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Área de Interesse</legend>

            <Select
              name="subject"
              label="Área de Interesse"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
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

            <Input
              name="cost"
              label="Média Salarial"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Adquira mais funcinalidades ao seu plano atual</legend>
          </fieldset>

          <footer>
            <p>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default CandidateForm;
