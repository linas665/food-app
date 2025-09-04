import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentMethod.css';


const PaymentMethod = () => {
  const navigate = useNavigate();

  const handleCOD = () => {
    
    alert('ORDER SUCCESSFULL!');
    navigate('/');
  };

  return (
    <div className="payment-method-container">
      <h1>Select Payment Method</h1>
      <div className="payment-options">
        <div className="payment-option disabled">
          <input type="radio" id="credit-card" name="payment" disabled />
          <label htmlFor="credit-card">Credit/Debit Card (Coming Soon)</label>
        </div>
        <div className="payment-option disabled">
          <input type="radio" id="net-banking" name="payment" disabled />
          <label htmlFor="net-banking">Net Banking (Coming Soon)</label>
        </div>
        <div className="payment-option">
          <input type="radio" id="cod" name="payment" checked readOnly />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
      </div>
      <button onClick={handleCOD} className="confirm-button">Confirm Payment</button>
    </div>
  );
};

export default PaymentMethod;
