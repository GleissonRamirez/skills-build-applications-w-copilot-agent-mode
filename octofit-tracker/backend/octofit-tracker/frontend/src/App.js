
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-octofit bg-octofit shadow">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={require('./octofitapp-small.png')} alt="OctoFit Logo" width="40" height="40" className="me-2" style={{borderRadius: '8px', background: '#fff'}} />
            <span className="fw-bold">OctoFit Tracker</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Atividades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Equipes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            {/* Bootstrap Card */}
            <div className="card mb-4">
              <div className="card-body">
                <h1 className="card-title display-5 mb-3">Bem-vindo ao <span className="text-primary">OctoFit Tracker</span></h1>
                <p className="card-text">Gerencie suas atividades, equipes e acompanhe o ranking de super-heróis!</p>
                <button className="btn btn-primary me-2" onClick={() => setShowModal(true)}>Abrir Modal</button>
                <a href="https://react.dev" className="btn btn-link">Saiba mais sobre React</a>
              </div>
            </div>

            {/* Bootstrap Table */}
            <h2 className="mb-3">Exemplo de Tabela</h2>
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Equipe</th>
                  <th>Pontos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Clark Kent</td>
                  <td>DC</td>
                  <td>1100</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Tony Stark</td>
                  <td>Marvel</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>

            {/* Bootstrap Form */}
            <h2 className="mb-3">Exemplo de Formulário</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="inputNome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="inputNome" placeholder="Digite seu nome" />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Digite seu email" />
              </div>
              <button type="submit" className="btn btn-success">Enviar</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal de Exemplo</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Este é um modal de exemplo usando Bootstrap!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fechar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
