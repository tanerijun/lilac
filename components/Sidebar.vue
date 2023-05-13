<template>
  <nav class="flex h-full w-[320px] flex-col gap-2 border border-red-600">
    <div class="rounded-md border border-yellow-600 p-4">
      <ul class="flex flex-col gap-2">
        <li>Home</li>
        <li>Search</li>
      </ul>
    </div>
    <div class="border border-emerald-950">
      <header class="flex justify-between">
        <!-- Should be a tooltip showing "collapse your library or expand your library" -->
        <button>Your Library</button>
        <div>
          <button>+</button>
          <button>"->"</button>
        </div>
      </header>
      <!-- Should be horizontally-scrollable like a carousel -->
      <div>
        <ul id="filter">
          <li>
            <button>Playlists</button>
            <button>Artists</button>
            <button>Albums</button>
            <button>Podcasts & Shows</button>
          </li>
        </ul>
      </div>
      <!-- List of songs in library, vertically scrollable -->
      <div>
        <div class="flex justify-between">
          <!-- Search inside library -->
          <button>Search</button>
          <!-- Should be a menu -->
          <button>Sort by</button>
        </div>
        <div>
          <ul>
            <li>Album1</li>
            <li>Album2</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
