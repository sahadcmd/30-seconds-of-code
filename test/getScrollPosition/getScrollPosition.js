module.exports = (el = window) => ({
x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});