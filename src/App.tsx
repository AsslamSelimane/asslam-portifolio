import './App.css'

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Arial',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        Asslam Selimane
      </h1>

      <p style={{ fontSize: '20px', maxWidth: '700px' }}>
        Bem-vindo ao meu portfólio profissional.
      </p>

      <p style={{ marginTop: '20px', opacity: 0.7 }}>
        Website em actualização...
      </p>
    </div>
  )
}

export default App