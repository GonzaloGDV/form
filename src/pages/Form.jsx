import React, { useState, useEffect } from 'react';
import data from '../assets/db.json';
import styles from '../styles/Form.module.css';
import { database } from '../components/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const collectionRef = collection(database, 'answers');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    full_name: '',
    email: '',
    birth_date: '',
    country_of_origin: '',
    terms_and_conditions: '',
  });
  const [disabledButton, setDisabledButton] = useState(true);
  const [terms, setTerms] = useState(true);

  function handlerInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handlerSelect(e) {
    setInput({
      ...input,
      country_of_origin: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        country_of_origin: e.target.value,
      })
    );
  }

  function handlerOnClick() {
    return setTerms(!terms);
  }

  function handlerSubmit() {
    let answer = {
      ...input,
    };
    addDoc(collectionRef, { answer })
      .then(() => {
        alert('Información agregada');
      })
      .catch((err) => {
        console.log(err.message);
      });
    setInput({
      full_name: '',
      email: '',
      birth_date: '',
      country_of_origin: '',
      terms_and_conditions: '',
    });
    setTimeout(() => {
      navigate('/answers');
    }, 500);
  }

  function validate(input) {
    let errors = {};
    if (!input.full_name) {
      errors.full_name = 'El nombre completo es requerido';
    } else if (!/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(input.full_name)) {
      errors.full_name = 'Nombre no válido. Solo debe contener letras';
    }

    if (!input.email) {
      errors.email = 'El correo electrónico es requerido';
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        input.email
      )
    ) {
      errors.email = 'El formato de email debe ser válido.';
    }
    if (!input.country_of_origin) {
      errors.country_of_origin = 'El país de origen es requerido.';
    }
    if (!input.birth_date) {
      errors.birth_date = 'La fecha de nacimiento es requerida.';
    }
    if (terms === true) {
      errors.terms_and_conditions = 'Los términos deben ser aceptados.';
    }
    return errors;
  }

  useEffect(() => {
    if (
      input.country_of_origin.length < 1 ||
      errors.hasOwnProperty('full_name') ||
      errors.hasOwnProperty('email') ||
      errors.hasOwnProperty('birth_date') ||
      terms === true
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [errors, terms, input, setDisabledButton]);

  return (
    <div className={styles.container}>
      <Header />
      <form className={styles.form} style={{ maxWidth: '400px' }}>
        {data.items &&
          data.items.map(({ type, label, name, options, index }) => {
            return JSON.stringify({ type }) ===
              JSON.stringify({ type: 'select' }) ? (
              <div key={index}>
                <select
                  onChange={handlerSelect}
                  className='form-select mt-4'
                  aria-label={name}
                >
                  <option default>{label}</option>
                  {options &&
                    options.map(({ value, label, index }) => {
                      return (
                        <option key={index} value={value}>
                          {label}
                        </option>
                      );
                    })}
                </select>
                {errors.country_of_origin && (
                  <p className={styles.danger}>{errors.country_of_origin}</p>
                )}
              </div>
            ) : JSON.stringify({ type }) ===
              JSON.stringify({ type: 'submit' }) ? (
              <button
                disabled={disabledButton}
                type={type}
                key={index}
                onClick={handlerSubmit}
                className='btn w-100'
              >
                {label}
              </button>
            ) : JSON.stringify({ type }) ===
              JSON.stringify({ type: 'checkbox' }) ? (
              <div className='mb-3 mt-3 form-check' key={index}>
                <label forhtml={name} className='form-check-label'>
                  {label}
                </label>
                <input
                  className='form-check-input bg-danger'
                  type={type}
                  name='terms_and_conditions'
                  id={name}
                  value={input.terms_and_conditions}
                  onClick={() => handlerOnClick()}
                  required
                />
                {terms && (
                  <p className={styles.danger}>{errors.terms_and_conditions}</p>
                )}
              </div>
            ) : JSON.stringify({ type }) ===
              JSON.stringify({ type: 'text' }) ? (
              <div className='mb-3' key={index}>
                <label forhtml={name} className='form-label'>
                  {label}
                </label>
                <input
                  type='text'
                  className='form-control'
                  id={name}
                  name='full_name'
                  value={input.full_name}
                  onChange={handlerInputChange}
                  required
                />
                {errors.full_name && (
                  <p className={styles.danger}>{errors.full_name}</p>
                )}
              </div>
            ) : JSON.stringify({ type }) ===
              JSON.stringify({ type: 'email' }) ? (
              <div className='mb-3' key={index}>
                <label forhtml={name} className='form-label'>
                  {label}
                </label>
                <input
                  type={type}
                  className='form-control'
                  id={name}
                  name='email'
                  value={input.email}
                  onChange={handlerInputChange}
                  required
                />
                {errors.email && (
                  <p className={styles.danger}>{errors.email}</p>
                )}
              </div>
            ) : (
              <div className='mb-3' key={index}>
                <label forhtml={name} className='form-label'>
                  {label}
                </label>
                <input
                  type={type}
                  className='form-control'
                  id={name}
                  name='birth_date'
                  value={input.birth_date}
                  onChange={handlerInputChange}
                  required
                />
                {errors.birth_date && (
                  <p className={styles.danger}>{errors.birth_date}</p>
                )}
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default Form;
