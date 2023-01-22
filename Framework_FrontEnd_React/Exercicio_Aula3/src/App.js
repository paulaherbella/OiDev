import './App.css';
import Title from './components/Title/Title'
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Link from './components/Link/Link';

function App() {
  return (
    <div className="container">
      <div className="login">
        <Title />
        <Input />
        <Button />
        <Link />
      </div>
    </div>
  );
}

export default App;
