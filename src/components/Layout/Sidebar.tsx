import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>BTP POS</h2>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/pos">POS</Link>
        <Link to="/stock">Stock</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/debts">Hutang</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;