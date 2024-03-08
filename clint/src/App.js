import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';

function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: '/login',
      element: <Login />,
    }
  ]) 
  return (
    <>
      <RouterProvider router={routers}/>
    </>
  );
}

export default App;
