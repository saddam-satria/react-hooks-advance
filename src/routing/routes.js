import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/homepage';
import Hooks from '../pages/hooks';
import UseCallbackPage from '../pages/hooks/useCallbackPages';
import UseContextPage from '../pages/hooks/useContextPages';
import UseEffectPage from '../pages/hooks/useEffectPages';
import UseMemoPage from '../pages/hooks/useMemoPages';
import UseReducerPage from '../pages/hooks/useReducerPages';
import UseRefPage from '../pages/hooks/useRefPage';
import UseStatePage from '../pages/hooks/useStatePages';

export function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/hooks/usestate" element={<UseStatePage />} />
        <Route path="/hooks/useeffect" element={<UseEffectPage />} />
        <Route path="/hooks/usecallback" element={<UseCallbackPage />} />
        <Route path="/hooks/usememo" element={<UseMemoPage />} />
        <Route path="/hooks/usecontext" element={<UseContextPage />} />
        <Route path="/hooks/usereducer" element={<UseReducerPage />} />
        <Route path="/hooks/useref" element={<UseRefPage />} />
      </Routes>
    </Router>
  );
}
