<script>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default {

  name: "NavigationHeader",
  data() {
    return {
      active: false,
    }
  },
  props: {
    supportButton: {
      type: String,
      required: true,
    },
    instagramLink: {
      type: String,
      required: true,
    },
    logo: {
      type: Object,
      required: true,
    },
    facebookLink: {
      type: String,
      required: true,
    }
  },
  methods: {
    toggleMenu() {
      this.active =!this.active;
    },
  },
  mounted() {
    const nav_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#navbar',
        start: "top top",
        end: "64 top",
        scrub: 1,
      }
    })

    nav_timeline.to("#navbar", {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    })
    nav_timeline.fromTo("#navbar", {
      backgroundColor: "transparent",
    }, {
      backgroundColor: "#fff",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
    })
  }
}
</script>

<template>
  <nav id="navbar">
    <div class="nav-popup" :class="{
      active
    }">
      <ul>
        <li>
          <router-link to="/" @click="toggleMenu">Strona główna</router-link>
        </li>
        <li>
          <router-link to="/inicjatywy" @click="toggleMenu">Nasze Inicjatywy</router-link>
        </li>
        <li>
          <router-link to="/patronka" @click="toggleMenu">Nasza Patronka</router-link>
        </li>
        <li>
          <router-link to="/onas" @click="toggleMenu">Poznaj fundacje</router-link>
        </li>
        <li>
          <router-link to="/warte_przeczytania" @click="toggleMenu">Warte przeczytania</router-link>
        </li>
        <li>
          <router-link to="/kontakt" @click="toggleMenu">Kontakt</router-link>
        </li>
      </ul>
      <button id="mobile_support_us_button" @click="$emit('openPopup')">
        <p>{{ supportButton }}</p>
        <img src="@/assets/support_us.gif" alt="" width="48" height="48" />
      </button>
    </div>
    <div class="left">
      <router-link to="/">
        <img :src="`https://backend.godniej.org${logo.url}`" :alt="logo.alternativeText" id="logo">
      </router-link>
      <div class="nav-burger-menu" :class="{
        active
      }" @click="toggleMenu">
        <div class="line top"></div>
        <div class="line mid"></div>
        <div class="line bot"></div>
      </div>
    </div>
    <div class="right">
      <div class="socials">
        <a :href="instagramLink" target="_blank">
          <!--Icon source - https://www.flaticon.com/free-icon/instagram_1384031?term=instagram&page=1&position=8&origin=search&related_id=1384031-->
          <svg xmlns="http://www.w3.org/2000/svg" height="511pt" viewBox="0 0 511 511.9" width="511pt">
            <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/><path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/><path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/>
          </svg>
        </a>
        <a :href="facebookLink" target="_blank">
          <!--Icon source - https://www.flaticon.com/free-icon/facebook-app-symbol_20837?term=facebook&page=1&position=1&origin=search&related_id=20837-->
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 155.139 155.139" xml:space="preserve">
            <path d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
              c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
              v20.341H37.29v27.585h23.814v70.761H89.584z"></path>
          </svg>
        </a>
      </div>
      <button id="support_us_button" @click="$emit('openPopup')">
        <p id="button_label">{{ supportButton }}</p>
        <img src="@/assets/support_us.gif" alt="" width="48" height="48" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
 #logo {
   height: 80px;
 }
 nav {
   position: fixed;
   padding: 2rem 4rem;
   top: 0;
   left: 0;
   box-sizing: content-box;
   height: 80px;
   display: flex;
   width: calc(100% - 8rem);
   justify-content: space-between;
   z-index: 100;
 }
 #support_us_button {
   display: flex;
   gap: 1rem;
   align-items: center;
   justify-content: center;
   padding-inline: 2rem;
   border-radius: 40px;
   border: none;
   background: linear-gradient(90deg, var(--yellow), var(--magenta), var(--blue));
   height: 80px;
   cursor: pointer;
 }
 #support_us_button p {
   font-size: var(--font_l);
   font-weight: 600;
   color: white;
 }

 .left {
   display: flex;
   gap: 2rem;
   align-items: center;
 }

 .right {
   display: flex;
   gap: 1rem;
 }

 .socials {
   display: flex;
   gap: 1rem;
 }
 .socials a {
   width: 80px;
   height: 80px;
   border-radius: 40px;
   background: var(--yellow);
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .socials svg {
   width: 48px;
   height: 48px;
   fill: #fff;
 }

 .nav-burger-menu {
   width: 48px;
   height: 48px;
   position: relative;
   cursor: pointer;
 }
 .nav-burger-menu .line {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 3px;
   width: 48px;
   height: 6px;
   background-color: var(--blue);
   transition: width 0.5s ease-in-out, transform 0.5s ease-in-out, top 0.5s ease-in-out;
 }

 .nav-burger-menu .line.top {
   transform: translate(-50%, -50%) rotate(-180deg);
   top: 10%;
 }
 .nav-burger-menu .line.bot {
   top: 90%;

 }
 .nav-burger-menu.active .line {
   width: 0;
 }
  .nav-burger-menu.active .line.bot, .nav-burger-menu.active .line.top{
    top: 50%;
    width: 100%;
  }
 .nav-burger-menu.active .line.bot{
   transform: translate(-50%, -50%) rotate(135deg);
 }
.nav-burger-menu.active .line.top {
  transform: translate(-50%, -50%) rotate(-135deg);
 }

.nav-popup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: white;
  width: 30rem;
  z-index: -1;
  box-shadow: 4px 0 10px 4px rgba(0, 0, 0, 0.3);
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  padding: calc(80px + 6rem) 4rem;
}
.nav-popup ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 2rem;
}

.nav-popup li a {
  color: var(--blue);
  text-decoration: none;
  font-size: var(--font_l);
  font-weight: 600;
}
.nav-popup.active {
  transform: translateX(0%);
  opacity: 1;
}
 #mobile_support_us_button {
   display: none;
   cursor: pointer;
 }
@media screen and (max-width: 1264px) {
  #support_us_button {
    height: 60px;
    padding: 1rem;
  }
  .socials a {
    height: 60px;
    width: 60px;
  }
  #logo {
    height: 60px;
  }
  .socials a svg {
    width: 32px;
    height: 32px;
  }
  #support_us_button img {
    width: 40px;
    height: 40px;
  }
  .nav-burger-menu {
    width: 32px;
    height: 32px;
  }
  .nav-burger-menu .line.top {
    top: 0;
  }
  .nav-burger-menu .line.bot {
    top: 100%;
  }
  .nav-popup {
    width: 24rem;
  }
  nav {
    height: 60px;
  }
}
 @media screen and (max-width: 1024px) {
   nav {
     padding: 1rem 2rem;
     width: calc(100% - 4rem);
  }
   .nav-popup {
     width: 20rem;
     padding: calc(60px + 4rem) 2rem;
   }
 }
 @media screen and (max-width: 768px) {
   #button_label {
     display: none;
   }
   #support_us_button {
     width: 60px;
   }
 }
 @media screen and (max-width: 624px) {
   .right {
     display: none;
   }
   .left {
     width: 100%;
     display: flex;
     justify-content: space-between;
   }
   .nav-popup {
     width: 100%;
     display: flex;
     flex-direction: column;
     padding-bottom: 2rem;
     justify-content: space-between;
   }
   #mobile_support_us_button {
     width: 100%;
     background: linear-gradient(90deg, var(--yellow), var(--magenta), var(--blue));
     border-radius: 100px;
     border: none;
     color: white;
     font-size: var(--font_l);
     font-weight: 700;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 1rem;
   }
 }
</style>