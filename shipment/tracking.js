// Kargo takip fonksiyonu: takip numarasına göre API'den veri çekme
function fetchTracking(trackingNumber) {
  // API entegrasyon stub
  return fetch(`/api/shipment/${trackingNumber}`)
    .then(res => res.json())
    .then(data => document.getElementById('tracking-info').innerText = JSON.stringify(data));
}