import { getDocs, collection } from 'firebase/firestore';
import { database } from '../components/firebase';

const Answers = () => {
  const collectionRef = collection(database, 'answers');
  function getData() {
    getDocs(collectionRef).then((response) => {
      console.log(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }
  return (
    <div>
      <button onClick={getData}>Data</button>
    </div>
  );
};

export default Answers;
