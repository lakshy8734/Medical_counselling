import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


const Home = lazy(() => import('./Page/Home/Home'));
const Articles = lazy(() => import('./Page/Articles/Articles'));
const Subblog = lazy(() => import('./Page/Subblog/Subblog'));
const Relationship = lazy(() => import('./Page/Relationship/Relationship'));
const Doctor = lazy(() => import('./Page/Doctor/Doctor'));
const Profile = lazy(() => import('./Page/Profile/Profile'));
const LoginIn = lazy(() => import('./Page/LoginIn/LoginIn'));
const Start = lazy(() => import('./Page/Start/Start'));
const Break = lazy(() => import('./Page/Break/Break'));
const Stories = lazy(() => import('./Page/Stories/Stories'));
const SignIn = lazy(() => import('./Page/SignIn/SignIn'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/subblog" element={<Subblog />} />
            <Route path="/relationship-counselling" element={<Relationship />} />
            <Route path="/know-your-counselor" element={<Doctor />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Login-in" element={<LoginIn />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/pricing" element={<Start />} />
            <Route path="/break-up" element={<Break />} />
            <Route path="/Stories-telling" element={<Stories />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
