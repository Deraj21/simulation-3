module.exports = {
  createUser: (req, res, next) => {
    let { username, password } = req.body;
    const db = req.app.get('db');
    db.create_user([username, password, `https://robohash.org/${username}`])
      .then(response => {
        res.status(200).send(response[0]);
      });
  },
  loginUser: (req, res, next) => {
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
    let { title, img, content, author_id } = req.body;
    const db = req.app.get('db');
    db.create_post([title, img, content, author_id])
      .then(response => res.status(200).send())
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
