import React from 'react';
import data from './assets/db.json';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <form>
        {data.items &&
          data.items.map(({ type, label, name, options, index }) => {
            return JSON.stringify({ type }) ===
              JSON.stringify({ type: 'select' }) ? (
              <select
                className='form-select mt-4'
                key={index}
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
            ) : JSON.stringify({ type }) ===
              JSON.stringify({ type: 'submit' }) ? (
              <button type={type} className='btn'>
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
                  id={name}
                />
              </div>
            ) : (
              <div className='mb-3' key={index}>
                <label forhtml={name} className='form-label'>
                  {label}
                </label>
                <input type={type} className='form-control' id={name} />
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default App;
