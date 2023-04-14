const apiUrl = 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=' // 网易云音乐API地址

async function fetchPlaylist (apiUrl, playlistId) {
  const response = await fetch(`${apiUrl}${playlistId}`)
  const data = await response.json()
  return data
}

function createAudioElement (src) {
  const audioElement = document.createElement('audio')
  audioElement.src = src
  audioElement.controls = true
  return audioElement
}

function createSongInfoElement (song) {
  const div = document.createElement('div')
  div.className = 'text-center mb-4'
  div.innerHTML = `
    <div class="text-lg font-semibold">${song.name}</div>
    <div class="text-sm text-gray-500">${song.artist}</div>
  `
  return div
}

function createPlaylistElement (songs) {
  const select = document.createElement('select')
  select.className = 'w-full bg-white border border-gray-300 rounded-md py-2 px-4 mb-4'

  songs.forEach((song, index) => {
    const option = document.createElement('option')
    option.value = index
    option.textContent = `${song.name} - ${song.artist}`
    select.appendChild(option)
  })

  return select
}

async function initPlayer (playlistId) {
  const playerElement = document.getElementById('player')
  playerElement.innerHTML = '' // 清空播放器内容
  const playlist = await fetchPlaylist(apiUrl, playlistId)

  const audioElement = createAudioElement(playlist[0].url)
  const songInfoElement = createSongInfoElement(playlist[0])
  const playlistElement = createPlaylistElement(playlist)

  playerElement.appendChild(songInfoElement)
  playerElement.appendChild(playlistElement)
  playerElement.appendChild(audioElement)

  playlistElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value
    audioElement.src = playlist[selectedIndex].url
    songInfoElement.replaceWith(createSongInfoElement(playlist[selectedIndex]))
  })
}

document.getElementById('loadPlaylist').addEventListener('click', () => {
  const playlistId = document.getElementById('playlistId').value
  if (playlistId) {
    initPlayer(playlistId)
  } else {
    alert('请输入歌单ID')
  }
})
