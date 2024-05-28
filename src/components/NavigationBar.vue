<template>
  <div>
    <header>
      <div class="container">
        <nav class="desktop-navigation">
          <ul class="navigation">
            <li><router-link to="/events">Eventi</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/"><img src="../assets/logo.png" class="logo"></router-link></li>
            <li><router-link to="/FAQs">FAQs</router-link></li>
            <li><router-link to="/merch">Merch</router-link></li>
          </ul>
        </nav>
        <nav class="mobile-navigation">
          <a href="#"><img src="../assets/logo.png" class="logo"></a>
          <a href="javascript:void(0);" class="hamburger" v-on:click="openSidenav"><font-awesome-icon :icon="['fa', 'bars']" /></a>
        </nav>
        </div>
    </header>
    <div id="sidenav" class="sidenav">
      <a href="javascript:void(0)" class="close-sidenav-button" v-on:click="closeSidenav"><font-awesome-icon :icon="['fa', 'xmark']" /></a>
      <div id="sidenav-link-container" class="sidenav-link-container">
        <ul class="sidenav-links">
          <li><router-link to="/" v-on:click="closeSidenav">Home</router-link></li>
          <li><router-link to="/events" v-on:click="closeSidenav">Eventi</router-link></li>
          <li><router-link to="/about" v-on:click="closeSidenav">About</router-link></li>
          <li><router-link to="/FAQs" v-on:click="closeSidenav">FAQs</router-link></li>
          <li><router-link to="/merch" v-on:click="closeSidenav">Merch</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  methods: {
    openSidenav() {
      document.getElementById("sidenav").style.width = "100%";
      document.getElementById("sidenav-link-container").style.display = "flex";
    },
    closeSidenav() {
      document.getElementById("sidenav").style.width = "0%";
      document.getElementById("sidenav-link-container").style.display = "none";
    }
  }
}
</script>

<style scoped>
body {
    font-family: 'Roboto'
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.desktop-navigation {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.mobile-navigation {
    display: none;
}

.logo {
    width: 100px;
    height: 100px;
}

@media screen and (max-width: 850px) {
    .container {
        display: block;
    }

    .desktop-navigation {
      display: none;
    }

    .mobile-navigation {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
    }

    .logo {
        width: 120px;
        height: 120px;
    }
}

.navigation {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.hamburger {
    float: right;
    margin-right: 24px;
}

.sidenav {
    height: 100%;
    width: 0%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    overflow-x: hidden;
    transition: 0.5s;
    text-align: center;
    background-color: #006321;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sidenav a {
    text-decoration: none;
    font-size: 32px;
    color: white;
    display: block;
    transition: 0.3s;
    margin-bottom: 16px;
}

.sidenav .close-sidenav-button {
    position: absolute;
    right: 32px;
    top: 56px;
}

.sidenav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>
