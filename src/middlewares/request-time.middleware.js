module.exports = () => (req, res, next) => {
  res.set({ 'X-Request-Time': new Date() })
  next()
}
