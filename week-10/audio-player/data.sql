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

INSERT INTO tracks (path, playlist_id) VALUES ('All Stars Official Video ft ALMA.mp3', 1);
INSERT INTO tracks (path, playlist_id) VALUES ('Back Home.mp3', 1);
INSERT INTO tracks (path, playlist_id) VALUES ('Be mine.mp3', 1);
INSERT INTO tracks (path, playlist_id) VALUES ('Bump and Grind 2014.mp3', 1);
INSERT INTO tracks (path, playlist_id) VALUES ('Chasing Highs.mp3', 1);
INSERT INTO tracks (path, playlist_id) VALUES ('Do It Right ft Tkay Maidza.mp3', 1);
INSERT INTO tracks (path, playlist_id) VALUES ('Elnunk kellett volna.mp3', 1);
INSERT INTO tracks (path, playlist_id) VALUES ('Emlekszem Sopronban Telekom.mp3', 1);
INSERT INTO tracks (path, playlist_id) VALUES ('Empty Spaces Official Video Ultra Music.mp3', 1);

INSERT INTO tracks (path, playlist_id) VALUES ('Gone feat Anderson Paak Official Video.mp3', 2);
INSERT INTO tracks (path, playlist_id) VALUES ('Heaven feat Delaney Jane Official Lyric.mp3', 2);
INSERT INTO tracks (path, playlist_id) VALUES ('Holding On Backing Track Score.mp3', 2);
INSERT INTO tracks (path, playlist_id) VALUES ('I Know.mp3', 2);
INSERT INTO tracks (path, playlist_id) VALUES ('WellHello - Apu vedd meg.mp3', 2);
INSERT INTO tracks (path, playlist_id) VALUES ('What Is Love.mp3', 2);