playList = {
  MJ: 'Billy Jean',
  Maroon: 'Cold',
  Metallica: 'One'
};

function updatePlaylist (playlist, artist, song){
  playlist[artist] = song;
  return playList;
}
