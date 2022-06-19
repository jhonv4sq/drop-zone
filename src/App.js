import './App.css';
import {ButtonGreen} from './component/Button';
import DropZone from './component/DropZone';
import GoogleButton from './component/GoogleButton';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container h-screen flex flex-col-reverse lg:flex-row w-10/12 lg:full justify-evenly'>

          <div className='lg:h-screen flex flex-col justify-center items-center justify-evenly'>
            <DropZone slot='arrastra tu archivo aquí' />
            <ButtonGreen />
          </div>

          <div className='lg:h-screen flex flex-col justify-center items-center'>
            <h1 className='text-white text-3xl lg:text-4xl mb-5'>
              Bienvienido a DDrop
            </h1>
            <p className='text-white w-full lg:w-[389px] text-justify text-sm lg:text-base mb-5'>
              Para subir tus archivos de forma simple a drive, puedes hacer LogIn a travé de Google.
            </p>
            <hr className='line mb-5'></hr>
            <GoogleButton />
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
