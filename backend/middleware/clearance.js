module.exports = function (req, res, next) {
  try {
    req.clearance = req.header('clearance');
    const position = req.header('position');
    if(position === "webdev" || position === "prezi" || position === "hr") {
        req.position = position
    }
    console.log(req.clearance + " and " + req.position)
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
