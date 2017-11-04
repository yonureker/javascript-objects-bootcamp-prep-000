playlist = {
  MJ: 'Billy Jean',
  Maroon: 'Cold',
  Metallica: 'One'
};

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removefromPlaylist (playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
