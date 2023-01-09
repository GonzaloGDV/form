import React, { useState } from 'react';
import data from '../assets/db.json';
// import axios from 'axios';
import styles from '../styles/Form.module.css';
import { database } from '../components/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
  const collectionRef = collection(database, 'answers');

  const [input, setInput] = useState({
    full_name: '',
    email: '',
    birth_date: '',
    country_of_origin: '',
    terms_and_conditions: '',
  });

  function handlerInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handlerSelect(e) {
    setInput({
      ...input,
      country_of_origin: e.target.value,
    });
  }

  function handlerSubmit() {
    let answer = {
      ...input,
    };
    console.log(answer);
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
  }

  return (
    <div>
      {' '}
      <form className={styles.form}>
        {data.items &&
          data.items.map(({ type, label, name, options, index }) => {
            return JSON.stringify({ type }) ===
              JSON.stringify({ type: 'select' }) ? (
              <select
                onChange={handlerSelect}
                className='form-select mt-4'
                key={index}
                aria-label={name}
                required
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
            ) : JSON.stringify({ type }) ===
              JSON.stringify({ type: 'submit' }) ? (
              <button
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
                  type={type}
                  className='form-check-input bg-danger'
                  name='terms_and_conditions'
                  value={input.terms_and_conditions}
                  id={name}
                  required
                />
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
              </div>
            );
            // (
            //   <div className='mb-3' key={index}>
            //     <label forhtml={name} className='form-label'>
            //       {label}
            //     </label>
            //     <input
            //       type={type}
            //       className='form-control'
            //       id={name}
            //       value={input.name}
            //       onChange={handlerInputChange}
            //       required
            //     />
            //   </div>
            // );
          })}
      </form>
    </div>
  );
};

export default Form;
