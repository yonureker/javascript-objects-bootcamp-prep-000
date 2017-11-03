playList = {
  MJ: 'Billy Jean',
  Maroon 5: 'Cold',
  Metallica: 'One'
}

function updatePlaylist (playList, artist, song){
  Object.assign({}, playList, [artist: song]);
  return playList
}
