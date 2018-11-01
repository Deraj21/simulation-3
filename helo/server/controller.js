module.exports = {
  createUser: (req, res, next) => {
    let { username, password } = req.body;
    const db = req.app.get('db');
    db.create_user([username, password, `https://robohash.org/${username}?set=set4`])
      .then(response => {
        req.session.user_id = response[0].user_id;
        req.session.username = response[0].username;
        req.session.profile_pic = response[0].profile_pic;
        res.status(200).send(response[0]);
      });
  },
  loginUser: (req, res, next) => {
    let { username, password } = req.body;
    const db = req.app.get('db');
    db.login_user([username, password])
      .then(response => {
        if (response){
          req.session.user_id = response[0].user_id;
          req.session.username = response[0].username;
          req.session.profile_pic = response[0].profile_pic;
          console.log(req.session.username + ' logged in');
          res.status(200).send(response[0]);
        } else {
          res.status(404).send();
        }
      });
  },
  logoutUser: (req, res) => {
    console.log(req.session);
    let { username } = req.session;
    console.log(username + ' logged out');
    res.status(200).send(`${username} logged out`);
    req.session.destroy();
  },
  getCurrentUser: (req, res) => {
    let { username, user_id, profile_pic } = req.session;
    console.log(`getting user ${username}, ${user_id}`);
    res.status(200).send({ username, user_id, profile_pic });
  },
  getPost: (req, res) => {
    let { id } = req.params;
    const db = req.app.get('db');
    db.get_post([id])
      .then(response => res.status(200).send(response))
      .catch(err => console.log(err.message));
  },
  getPosts: (req, res) => {
    const db = req.app.get('db');
    db.get_posts()
      .then(response => res.status(200).send(response))
      .catch(err => console.log(err.message));
  },
  createPost: (req, res) => {
    let { title, img, content } = req.body;
    let { user_id } = req.session;
    console.log(user_id);
    const db = req.app.get('db');
    db.create_post([title, img, content, user_id])
      .then(response => res.status(200).send(response))
      .catch(err => console.log(err.message));
  },
  editPost: (req, res) => {
    let { id } = req.params;
    let { title, img, content, author_id } = req.body;
    const db = req.app.get('db');
    db.edit_post([id, title, img, content, author_id])
      .then(response => res.status(200).send())
      .catch(err => console.log(err.message));
  },
  deletePost: (req, res) => {
    let { id } = req.params;
    const db = req.app.get('db');
    db.delete_post([id])
      .then(response => res.status(200).send())
      .catch(err => console.log(err.message));
  },
}
