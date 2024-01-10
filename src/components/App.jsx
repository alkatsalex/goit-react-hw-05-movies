import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Home from './pages/Home/Home';
// import Movies from './pages/Movise/Movise';
// import Header from './pages/Header/Header';
// import MovieDetails from './pages/MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movise'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
