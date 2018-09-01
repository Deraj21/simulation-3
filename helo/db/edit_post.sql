update posts
  set title = $2,
  img = $3,
  content = $4,
  author_id = $5
    where id = $1;
