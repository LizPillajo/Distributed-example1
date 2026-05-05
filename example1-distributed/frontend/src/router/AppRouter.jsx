import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Navbar } from '../components/Navbar';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet /> 
    </>
  ),
});

//Routes: 
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const favoritesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/favorites',
  component: Favorites,
});

const routeTree = rootRoute.addChildren([indexRoute, favoritesRoute]);
export const router = createRouter({ routeTree });