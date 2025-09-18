'use client'

export default function RefundSuccess() {
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
        backgroundColor: '#f0fdf4',
        border: '2px solid #22c55e',
        borderRadius: '12px',
        padding: '40px',
        maxWidth: '400px',
        width: '100%'
      }}>
        <div style={{
          fontSize: '64px',
          marginBottom: '24px'
        }}>✅</div>
        
        <h1 style={{
          color: '#22c55e',
          marginBottom: '16px',
          fontSize: '32px',
          fontWeight: 'bold'
        }}>Refund Processed!</h1>
        
        <p style={{
          color: '#64748b',
          marginBottom: '32px',
          fontSize: '18px'
        }}>Your refund has been successfully processed and will appear in your account within 5-10 business days.</p>
        
        <button
          onClick={() => window.location.href = '/'}
          style={{
            backgroundColor: '#22c55e',
            color: 'white',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 2px 4px rgba(34, 197, 94, 0.2)'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#16a34a'
            e.target.style.transform = 'translateY(-1px)'
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#22c55e'
            e.target.style.transform = 'translateY(0)'
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}