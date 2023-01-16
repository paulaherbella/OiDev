import './App.css';
import Title from './components/Title/Title'
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="container">
      <div>
        <Title />
        <Input name="user " />
        <Input name="password " />
        <Button />
      </div>
    </div>
  );
}

export default App;
