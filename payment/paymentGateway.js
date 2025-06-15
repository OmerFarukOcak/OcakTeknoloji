// Ödeme API entegrasyonu (örn. Stripe, PayTR stub)
function processPayment(paymentData) {
  // API entegrasyon stub
  return fetch('/api/payment', {
    method: 'POST',
    body: JSON.stringify(paymentData)
  }).then(res => res.json());
}