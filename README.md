# neteasePlayer

```<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>嵌入式网易云音乐播放器</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.17/dist/tailwind.min.css" />
</head>
<body>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-6 rounded-lg shadow-md w-80">
      <div class="text-xl font-semibold mb-4">网易云音乐播放器</div>
      <div class="mb-4">
        <label for="playlistId" class="block mb-2">请输入歌单ID：</label>
        <input type="text" id="playlistId" class="w-full bg-white border border-gray-300 rounded-md py-2 px-4" />
      </div>
      <button id="loadPlaylist" class="w-full bg-blue-600 text-white py-2 rounded-md mb-4">加载歌单</button>
      <div id="player" class="flex flex-col items-center"></div>
    </div>
  </div>
  <script src="player.js"></script>
</body>
</html>
```
