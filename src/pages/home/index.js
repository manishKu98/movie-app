import Main from '../../components/main/main';
import Aside from '../../components/aside/aside';
import Form from '../../components/form/form';

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: 1 }}>
        <Aside />
        <Form />
      </div>
      <Main />
    </div>
  );
}
export default Home;
