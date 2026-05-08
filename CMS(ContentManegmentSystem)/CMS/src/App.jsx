import React from 'react'
import { Routes, Route,useLocation } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './Page/Home/Home';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Pages from './Page/Pages/Pages';
import PageBuilder from './Page/PageBuilder/PageBuilder';
import Post from './Page/Post/Post';
import Category from './Page/Category/Category';
import FormPage from './Page/FormPage/FormPage';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './Context/Tanstack';
import Menu from './Page/Menu/Menu';
import DesignPage from './Page/DesignPage/DesignPage';
import NotFound from './Page/NotFound/NotFound';
// import Auth from './Page/Auth/Auth';
import AuthPages from './Page/AuthPages/AuthPages';
function App() {

  const location = useLocation();
  // Create a client
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex App">
       
{
        // location.pathname !== "/auth" &&
         <LeftSideBar />
      }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPages />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/post" element={<Post />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pagebuilder/:PageId" element={<DesignPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/form/:formname" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>

  )
}

export default App