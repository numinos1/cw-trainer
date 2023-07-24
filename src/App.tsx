import { Outlet, Link } from "react-router-dom";
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

export function App() {
  return (
    <div className="cw-app">
      <header>
        <h1><span>CW</span>Trainer</h1>
        <ul>
          <li><Link to="/assessment">Assessment</Link></li>
          <li><Link to="/player">Player</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}
