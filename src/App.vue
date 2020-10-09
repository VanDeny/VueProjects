<template>
  <div id="app">
    <h1>
      VanDeny's projects
    </h1>
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="nav text-center mt-3">
      <router-link to="/about">About</router-link>
      <router-link to="/todoApp">Todos</router-link>
    </div>

    <div class="main-content mt-5">
      <router-view />
    </div>

  </div>
</template>
