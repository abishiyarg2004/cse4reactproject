import logo from './logo.svg';
import './App.css';
import FunctionalEx1 from './components/combo';
import Classcomponent from './components/classcomponent';
import Props from './Day3/PropsComponent';
import Mui from './Day4/Mui';
import MUInew from './Day4/MUInew';
import Namegreeting from './Day3/Namegreeting';
import ListKey1 from './Listkey';
import { Gridex } from './Day4/Gridex';
import Paperinmui from './Day4/Paperinmui';

import ErrorBoundary from './Day5/ErrorBoundary';
import Name from './Day5/Error1name';
import ComponentDid from './Day5/ComponentDid';
import Axiosget from './Day8/Axiosget';
import Axiosput from './Day8/Axiosput';
import Axiosdel from './Day8/Axiosdel';



function App() {
  return (
    <body> 
    <div className="App">
      <h1 id="a">Hello abi</h1>
      {/* <FunctionalEx1 /> */}
      {/* <Props name="Abi" prof="Artist"  age="19"/> */}
      
      {/* <Namegreeting />
      <ListKey1 />
   <Gridex /> */}
   {/* <Paperinmui /> */}
   {/* <ErrorBoundary>
    <Name studentName="Harish"/>
   </ErrorBoundary> */}
   {/* <TryCatch name="Abi"/> */}
   {/* <ComponentDid/> */}

   <Axiosget />
   <Axiosput />
   <Axiosdel />
    </div>
    
    </body>
  );
}

export default App;
