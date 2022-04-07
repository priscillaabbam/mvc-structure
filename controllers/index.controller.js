const welcome = (req, res) => {
  res.send("<h1>Hello World!</h1>");
};

const greet = (req, res) => {
  res.send("<h1>hello , Fellow Programmers");
};

module.exports = {
  welcome,
  greet,
};
