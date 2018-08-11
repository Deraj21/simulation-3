module.exports = {
  createUser: (req, res, next) => {
    let { username, password } = req.body;
    const db = req.app.get('db');
    db.create_user([username, password, `https://robohash.org/${username}`])
      .then(response => {
        res.status(200).send(response[0]);
      });
  },
  loginUser: (req, rea, next) => {
    let { username, password } = req.body;
    const db = req.app.get('db');
    db.login_user([username, password])
      .then(response => {
        if (response){
          res.status(200).send(response[0]);
        } else {
          res.status(404).send();
        }
      });
  }
}