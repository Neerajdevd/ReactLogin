import bird from './bird.jpg';
import Loginform from './components/Loginform';
import Uni from './uni.jpg';


function App() {
  return (
    <div className="flex flex-col flex-auto w-full h-screen">
      <div className="h-full">
     <div className="grid grid-cols-3 h-full">
      <div className="bg-blue-900">
       <img src={Uni}/>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <div className="min-w-[450] px-8">
          <div className="mb-8">
          <img src={bird} alt='logo'/>
            <h1 className="text-3xl font-large">Welcome Back!</h1>
            <p>Glad to see you again</p>
          </div>
        <Loginform/>
        </div>
      </div>
     </div>
      </div>
     
    </div>
  );
}

export default App;
