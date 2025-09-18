 
'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import styles from './page.module.css'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [refundLoading, setRefundLoading] = useState(false)
  const [amount, setAmount] = useState(20)
  const [paymentIntentId, setPaymentIntentId] = useState('')
  const [refundAmount, setRefundAmount] = useState('')
  const [refundReason, setRefundReason] = useState('requested_by_customer')

  const handleCheckout = async () => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      if (!data.sessionId) {
        throw new Error('No session ID received')
      }

      const stripe = await stripePromise
      
      if (!stripe) {
        throw new Error('Stripe failed to load')
      }
      
      const { error } = await stripe.redirectToCheckout({ 
        sessionId: data.sessionId 
      })
      
      if (error) {
        console.error('Stripe checkout error:', error)
        alert('Payment failed: ' + error.message)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleRefund = async () => {
    if (!paymentIntentId.trim()) {
      alert('Please enter Payment Intent ID')
      return
    }

    setRefundLoading(true)
    
    try {
      const refundData = {
        payment_intent_id: paymentIntentId.trim(),
        reason: refundReason
      }

      if (refundAmount && parseFloat(refundAmount) > 0) {
        refundData.amount = parseFloat(refundAmount)
      }

      const response = await fetch('/api/refund', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(refundData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process refund')
      }

      if (data.success) {
        alert(`Refund successful! Refund ID: ${data.refund.id}, Amount: £${data.refund.amount / 100}, Status: ${data.refund.status}`)
        setPaymentIntentId('')
        setRefundAmount('')  
        window.location.href = '/refund-success'
      } else {
        throw new Error('Refund failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Refund error: ' + error.message)
    } finally {
      setRefundLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Stripe Checkout Demo</h1>
        
        <div className={styles.card}>
          <h2>Test Product</h2>
          <p>A sample product for testing Stripe integration</p>
          
          <div className={styles.priceSection}>
            <label htmlFor="amount">Amount (£):</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className={styles.input}
              min="1"
              step="1"
            />
            <p className={styles.price}>£{amount}.00</p>
          </div>
          
          <button
            onClick={handleCheckout}
            disabled={loading}
            className={styles.checkoutButton}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>

        <div className={styles.card}>
          <h2>Refund Payment</h2>
          <p>Enter Payment Intent ID to process a refund</p>
          
          <div className={styles.refundSection}>
            <label htmlFor="paymentIntentId">Payment Intent ID:</label>
            <input
              id="paymentIntentId"
              type="text"
              value={paymentIntentId}
              onChange={(e) => setPaymentIntentId(e.target.value)}
              className={styles.input}
              placeholder="pi_1234567890..."
            />
            
            <label htmlFor="refundAmount">Refund Amount (£) - Optional:</label>
            <input
              id="refundAmount"
              type="number"
              value={refundAmount}
              onChange={(e) => setRefundAmount(e.target.value)}
              className={styles.input}
              placeholder="Leave empty for full refund"
              min="0.01"
              step="0.01"
            />
            
            <label htmlFor="refundReason">Reason:</label>
            <select
              id="refundReason"
              value={refundReason}
              onChange={(e) => setRefundReason(e.target.value)}
              className={styles.input}
            >
              <option value="requested_by_customer">Requested by customer</option>
              <option value="duplicate">Duplicate</option>
              <option value="fraudulent">Fraudulent</option>
            </select>
          </div>
          
          <button
            onClick={handleRefund}
            disabled={refundLoading}
            className={styles.refundButton}
          >
            {refundLoading ? 'Processing Refund...' : 'Process Refund'}
          </button>
        </div>
      </main>
    </div>
  )
}
