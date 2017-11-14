CREATE TABLE posts (
  id      INT PRIMARY KEY AUTO_INCREMENT,
  title   VARCHAR(150) NOT NULL,
  url     VARCHAR(150) NOT NULL,
  score   INT          NOT NULL,
  timest  INT          NOT NULL
);