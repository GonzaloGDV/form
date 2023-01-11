import { getDocs, collection } from 'firebase/firestore';
import { database } from '../components/firebase';
import styles from '../styles/Answers.module.css';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

const Answers = () => {
  const collectionRef = collection(database, 'answers');
  const [users, setUsers] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  function getData() {
    getDocs(collectionRef).then((response) => {
      setUsers(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }

  return (
    <div className={styles.container}>
      <Header />
      {width < 992 ? (
        <div className={`container-fluid ${styles.verContainer}`}>
          {users &&
            users.map((user) => {
              return (
                <div className={`row ${styles.verTableRow}`} key={user.id}>
                  <p className={`col-lg-4 ${styles.verTable}`}>
                    Nombre: {user.answer.full_name}
                  </p>
                  <p className={`col-lg-4 ${styles.verTable}`}>
                    Correo eléctronico: {user.answer.email}
                  </p>
                  <p className={`col-lg-2 ${styles.verTable}`}>
                    Fecha de nacimiento: {user.answer.birth_date}
                  </p>
                  <p className={`col-lg-2 ${styles.verTable}`}>
                    País de origen: {user.answer.country_of_origin}
                  </p>
                </div>
              );
            })}
        </div>
      ) : (
        <div className={`container-fluid ${styles.horContainer}`}>
          <div className={`row ${styles.tableHeadRow}`}>
            <p className={`col-lg-4 ${styles.tableHead}`}>Nombre</p>
            <p className={`col-lg-4 ${styles.tableHead}`}>Correo eléctronico</p>
            <p className={`col-lg-2 ${styles.tableHead}`}>
              Fecha de nacimiento
            </p>
            <p className={`col-lg-2 ${styles.tableHead}`}>País de origen</p>
          </div>

          {users &&
            users.map((user) => {
              return (
                <div className={`row ${styles.tableBodyRow}`} key={user.id}>
                  <p className={`col-lg-4 ${styles.tableBody}`}>
                    {user.answer.full_name}
                  </p>
                  <p className={`col-lg-4 ${styles.tableBody}`}>
                    {user.answer.email}
                  </p>
                  <p className={`col-lg-2 ${styles.tableBody}`}>
                    {user.answer.birth_date}
                  </p>
                  <p className={`col-lg-2 ${styles.tableBody}`}>
                    {user.answer.country_of_origin}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Answers;
