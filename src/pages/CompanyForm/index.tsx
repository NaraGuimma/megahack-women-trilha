import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function CompanyForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [site, setSite] = useState('');
  const [bio, setBio] = useState('');

  const [scheduleItems, setScheduleItems] = useState([{ subject: 0, job: '' }]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { subject: 0, job: '' }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    history.goBack();
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Seja uma empresa parceira."
        description="O primeiro passo é preencher esse formulário com o link dos testes para cada vaga disponível"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Dados da empresa</legend>

            <Input
              name="name"
              label="Nome da empresa"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Input
              name="logo"
              label="Logomarca"
              value={logo}
              onChange={(e) => {
                setLogo(e.target.value);
              }}
            />

            <Input
              name="site"
              label="Website da empresa"
              value={site}
              onChange={(e) => {
                setSite(e.target.value);
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
            <legend>
              Vagas disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Nova vaga
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.subject} className="schedule-item">
                  <Select
                    name="s"
                    label="Vaga para"
                    value={scheduleItem.subject}
                    onChange={(e) =>
                      setScheduleItemValue(index, 'subject', e.target.value)
                    }
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
                    ]}
                  />
                  <Input
                    name="job"
                    label="Link para a vaga"
                    value={scheduleItem.job}
                    onChange={(e) =>
                      setScheduleItemValue(index, 'job', e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>
          <fieldset>
            <legend>Formas de Pagamento</legend>
          </fieldset>
          <footer>
            <button type="reset">Cancelar</button>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default CompanyForm;
