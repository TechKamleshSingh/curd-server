const myMiddleware = (req, res, next) => {
    next();
  };
  
  module.exports = myMiddleware;
  