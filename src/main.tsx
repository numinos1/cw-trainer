import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Player } from './components/player/player.component';
import { Quiz } from './components/quiz/quiz.component';
import { Assessment } from './components/assessment/assessment.component';
import { App } from './App';
import './main.scss';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: 'player',
    element: <Player />
  }, {
    path: 'quiz',
    element: <Quiz />
  }, {
    path: 'assessment',
    element: <Assessment />  
  }]
}]);

const root = ReactDOM.createRoot(
  document.getElementById('root')!
);

root.render(
  <RouterProvider router={router} />
);