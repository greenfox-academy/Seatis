CREATE TABLE playlists (
  id         INT PRIMARY KEY AUTO_INCREMENT,
  playlist   TINYTEXT,
  system     TINYINT(1) DEFAULT 0
);

CREATE TABLE tracks (
  id          INT PRIMARY KEY AUTO_INCREMENT,
  path        TINYTEXT,
  playlist_id INT
);

INSERT INTO playlists (playlist) VALUES ('Relaxing music for programming');
INSERT INTO playlists (playlist) VALUES ('Party');