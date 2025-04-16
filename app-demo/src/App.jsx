import React from 'react';
// import HelloWorld from './HelloWorld';
// import Counter from './Counter';
// import ListForm from './ListForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './features/Home';
import Profile from './features/Profile';
import UseEffectExample from './features/UseEffectExample';
import UseMemoExample from './features/UseMemoExample';
import UseCallbackExample from './features/UseCallbackExample';
import FormikForm from './features/FormikForm';
import I18nextExample from './features/I18nextExample';
import AxiosTest from './features/axiosInstance';

function App() {
  return (
    /*
    <div>
      <HelloWorld name="Focus Bear" />
      <Counter />
      <ListForm />
    </div> 
    */
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/useEffect' element={<UseEffectExample />} />
        <Route path='/useMemo' element={<UseMemoExample />} />
        <Route path='/useCallback' element={<UseCallbackExample />} />
        <Route path='/formik' element={<FormikForm />} />
        <Route path='/i18next' element={<I18nextExample />} />
        <Route path='/axios' element={<AxiosTest />} />
      </Routes>
    </Router>
  );
}

export default App;
