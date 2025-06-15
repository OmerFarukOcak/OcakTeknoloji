// Sunucu tarafı kargo API stub'u
module.exports = {
  getShipmentStatus: (trackingNumber) => ({ status: 'In Transit', lastLocation: 'Istanbul', estimatedDelivery: '2025-06-25' })
};