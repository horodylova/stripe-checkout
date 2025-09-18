'use client'

export default function Success() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: '#f0f9ff',
        border: '2px solid #0ea5e9',
        borderRadius: '12px',
        padding: '40px',
        maxWidth: '400px',
        width: '100%'
      }}>
        <div style={{
          fontSize: '64px',
          marginBottom: '24px'
        }}>🎉</div>
        
        <h1 style={{
          color: '#0ea5e9',
          marginBottom: '16px',
          fontSize: '32px',
          fontWeight: 'bold'
        }}>Payment Complete!</h1>
        
        <p style={{
          color: '#64748b',
          marginBottom: '32px',
          fontSize: '18px'
        }}>Thank you for your purchase!</p>
        
        <button
          onClick={() => window.location.href = '/'}
          style={{
            backgroundColor: '#0ea5e9',
            color: 'white',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 2px 4px rgba(14, 165, 233, 0.2)'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#0284c7'
            e.target.style.transform = 'translateY(-1px)'
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#0ea5e9'
            e.target.style.transform = 'translateY(0)'
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}