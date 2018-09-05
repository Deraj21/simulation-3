select p.post_id, p.title, p.img, p.content, u.user_id, u.username from posts p
  join users u on p.author_id = u.user_id
  where p.post_id = $1;
  