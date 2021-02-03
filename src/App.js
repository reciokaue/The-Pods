import BigBallers from "./components/bigBallers";
import Header from "./components/header";
import './index.css'

function App() {
  return (
    <div className="flex flex-col items-start overflow-y-auto w-full h-full bg-white dark:bg-gray-900  transition-all duration-1000 ease-in-out">
      <Header/>
      <BigBallers/>
    </div>
  );
}

export default App;
