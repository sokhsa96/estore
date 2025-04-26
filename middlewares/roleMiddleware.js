const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.userRole;
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Access denied: Unauthorized role' });
      }
      next();
    };
  };
  
  module.exports = authorizeRoles;
  