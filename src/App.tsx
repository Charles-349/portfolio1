
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './components/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />, 
        },
        {
          path: '/projects',
          element: <Projects />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
