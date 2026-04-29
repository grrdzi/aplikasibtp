import Layout from "../components/Layout/Layout";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <Layout title="Dashboard">
      <div className="cards">
        <div className="card">
          <h4>Omzet Hari Ini</h4>
          <p>Rp 8.250.000</p>
        </div>

        <div className="card">
          <h4>Total Produk</h4>
          <p>218</p>
        </div>

        <div className="card">
          <h4>Transaksi Hari Ini</h4>
          <p>34</p>
        </div>

        <div className="card">
          <h4>Hutang Aktif</h4>
          <p>Rp 12.400.000</p>
        </div>
      </div>

      <div className="welcome-box">
        <h2>Selamat Datang 👋</h2>
        <p>Kelola toko pompa air dengan sistem POS modern.</p>
      </div>
    </Layout>
  );
}

export default Dashboard;