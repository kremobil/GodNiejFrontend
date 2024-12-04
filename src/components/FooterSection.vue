<script>
import MainButton from "@/components/MainButton.vue";

export default {
  name: "FooterSection",
  components: {MainButton},
  props: {
    logo: {
      type: Object,
      required: true
    },
    foundationName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    socialHeader: {
      type: String,
      required: true
    },
    instagramLink: {
      type: String,
      required: true
    },
    facebookLink: {
      type: String,
      required: true
    },
    krs: {
      type: String,
      required: true
    },
    nip: {
      type: String,
      required: true
    },
    regon: {
      type: String,
      required: true
    },
    supportHeader: {
      type: String,
      required: true
    },
    thankYouMessage: {
      type: String,
      required: true
    },
    bankNumber: {
      type: String,
      required: true
    },
    supportButton: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
<footer>
  <section class="top">
    <div class="col left">
      <img :src="`https://backend.godniej.org${logo.url}`" :alt="logo.alternativeText" class="logo" data-aos="fade-up-right">
      <p class="info" data-aos="fade-up-right">
        <b>{{ foundationName }}</b><br>
        <a :href="`mailto:${email}`">{{ email }}</a><br>
        {{ street }},<br>
        {{ city }}
      </p>
    </div>
    <div class="col middle">
      <div class="socials">
        <h2 data-aos="fade-up">{{ socialHeader }}</h2>
        <div class="socials_links">
          <a :href="instagramLink" class="left" data-aos="zoom-in-up">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_146_439)">
                <path d="M47.953 14.1121C47.8406 11.5617 47.4282 9.80831 46.8374 8.28897C46.2279 6.67623 45.2902 5.23235 44.0617 4.03204C42.8614 2.81305 41.4079 1.86584 39.8139 1.26587C38.2858 0.675059 36.5415 0.262625 33.9911 0.150176C31.4216 0.0282037 30.6059 0 24.089 0C17.5721 0 16.7564 0.0282037 14.1965 0.140652C11.646 0.253101 9.89263 0.665902 8.37366 1.25635C6.76055 1.86584 5.31666 2.80353 4.11636 4.03204C2.89737 5.23235 1.95053 6.68575 1.35019 8.27982C0.759377 9.80831 0.346943 11.5522 0.234494 14.1026C0.112522 16.6721 0.0843182 17.4878 0.0843182 24.0047C0.0843182 30.5216 0.112522 31.3373 0.224971 33.8972C0.337419 36.4477 0.75022 38.2011 1.34103 39.7204C1.95053 41.3331 2.89737 42.777 4.11636 43.9773C5.31666 45.1963 6.77007 46.1435 8.36413 46.7435C9.89263 47.3343 11.6365 47.7468 14.1873 47.8592C16.7469 47.972 17.563 47.9999 24.0799 47.9999C30.5968 47.9999 31.4125 47.972 33.9724 47.8592C36.5228 47.7468 38.2762 47.3343 39.7952 46.7435C43.0211 45.4963 45.5715 42.9459 46.8187 39.7204C47.4091 38.1919 47.8219 36.4477 47.9344 33.8972C48.0468 31.3373 48.075 30.5216 48.075 24.0047C48.075 17.4878 48.0655 16.6721 47.953 14.1121ZM43.6305 33.7097C43.5273 36.0539 43.1335 37.3198 42.8053 38.1637C41.9988 40.2548 40.3391 41.9144 38.248 42.721C37.4041 43.0492 36.1291 43.4429 33.794 43.5459C31.2623 43.6587 30.503 43.6865 24.0985 43.6865C17.6941 43.6865 16.9253 43.6587 14.4027 43.5459C12.0585 43.4429 10.7926 43.0492 9.94867 42.721C8.90806 42.3364 7.96086 41.7269 7.19203 40.9299C6.395 40.1515 5.78551 39.2138 5.40091 38.1732C5.07272 37.3293 4.67897 36.0539 4.57604 33.7192C4.46323 31.1875 4.43539 30.4278 4.43539 24.0234C4.43539 17.6189 4.46323 16.8501 4.57604 14.3279C4.67897 11.9837 5.07272 10.7178 5.40091 9.87388C5.78551 8.8329 6.395 7.88606 7.20155 7.11687C7.97954 6.31984 8.91722 5.71034 9.9582 5.32611C10.8021 4.99792 12.0775 4.60417 14.4122 4.50088C16.9439 4.38843 17.7036 4.36023 24.1077 4.36023C30.5217 4.36023 31.281 4.38843 33.8036 4.50088C36.1478 4.60417 37.4136 4.99792 38.2575 5.32611C39.2982 5.71034 40.2454 6.31984 41.0142 7.11687C41.8112 7.89522 42.4207 8.8329 42.8053 9.87388C43.1335 10.7178 43.5273 11.9928 43.6305 14.3279C43.743 16.8596 43.7712 17.6189 43.7712 24.0234C43.7712 30.4278 43.743 31.178 43.6305 33.7097Z" fill="white"/>
                <path d="M24.089 11.6743C17.2816 11.6743 11.7585 17.1971 11.7585 24.0049C11.7585 30.8126 17.2816 36.3354 24.089 36.3354C30.8967 36.3354 36.4195 30.8126 36.4195 24.0049C36.4195 17.1971 30.8967 11.6743 24.089 11.6743ZM24.089 32.0034C19.6727 32.0034 16.0905 28.4215 16.0905 24.0049C16.0905 19.5882 19.6727 16.0063 24.089 16.0063C28.5056 16.0063 32.0875 19.5882 32.0875 24.0049C32.0875 28.4215 28.5056 32.0034 24.089 32.0034Z" fill="white"/>
                <path d="M39.786 11.1867C39.786 12.7764 38.4971 14.0653 36.9071 14.0653C35.3174 14.0653 34.0285 12.7764 34.0285 11.1867C34.0285 9.59669 35.3174 8.30811 36.9071 8.30811C38.4971 8.30811 39.786 9.59669 39.786 11.1867Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_146_439">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a :href="facebookLink" class="right" data-aos="zoom-in-up">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.7173 48V26.1065H35.0631L36.1651 17.5718H27.7173V12.1235C27.7173 9.65328 28.4004 7.96983 31.9468 7.96983L36.4625 7.96798V0.334152C35.6815 0.232669 33.0009 0 29.8809 0C23.3659 0 18.9056 3.97672 18.9056 11.2782V17.5718H11.5375V26.1065H18.9056V48H27.7173Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="company_data">
        <p data-aos="fade-up"><b>KRS:</b> {{ krs }}</p>
        <p data-aos="fade-up"><b>NIP:</b> {{ nip }}</p>
        <p data-aos="fade-up"><b>REGON:</b> {{ regon }}</p>
      </div>
    </div>
    <div class="col right">
      <h2 data-aos="fade-up-left">{{ supportHeader }} <img src="@/assets/support_us.gif" alt="<3" /></h2>
      <p data-aos="fade-up-left">{{ thankYouMessage }}</p>
      <p data-aos="fade-up-left"><b>Numer konta</b><br/>{{ bankNumber }}</p>
      <main-button @click="$emit('openPopup')" data-aos="fade-up-left">{{ supportButton }}</main-button>
    </div>
  </section>
  <section class="credits">
    <p>Fundacja GodNiej {{ new Date().getFullYear() }} © Wszelkie prawa zastrzeżone.</p>
    <p>Stronę wykonał: Wiktor Fajkowski</p>
  </section>
</footer>
</template>

<style scoped>
footer {
  width: 100%;
  box-shadow: 2px 0 8px 4px rgba(0, 0, 0, 0.2);
  overflow-x: hidden;
}
.top {
  display: grid;
  padding: 2rem 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
}
.logo {
  width: 18rem;
}
p {
  font-size: var(--font_s);
  color: var(--blue);
  line-height: 180%;
}
p a {
  text-decoration: none;
  color: var(--blue);
}
.col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.socials_links {
  display: flex;
  gap: 1rem;
}
.socials_links a {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.socials_links a.left {
  background: linear-gradient(90deg, var(--yellow), var(--magenta));
}
.socials_links a.right {
  background: linear-gradient(90deg, var(--magenta), var(--blue));
}

.socials_links svg {
  width: 48px;
  height: 48px;
  fill: #fff;
}
.socials {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
h2 {
  font-size: var(--font_l);
  background-image: linear-gradient(90deg, var(--yellow), var(--magenta), var(--blue));
  background-clip: text;
  text-fill-color: transparent;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.company_data {
  text-align: center;
}

.col.middle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.col.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.right h2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
.right h2 img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.credits {
  background-color: var(--blue);
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
}

.credits p {
  color: white;
  font-size: var(--font_m);
}

img {
  max-width: 100%;
}

@media screen and (max-width: 1264px) {
  .credits {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    text-align: center;
  }
  .top {
    grid-template-columns: 1fr 1fr;
  }
  .col.middle {
    grid-row: 2/3;
    grid-column: 1/3;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
  }
}

@media screen and (max-width: 1024px) {
  .top {
    padding: 2rem;
  }
  .credits {
    padding: 1rem 2rem;
  }
}

@media screen and (max-width: 768px) {
  .top {
    grid-template-columns: 1fr;
  }
  .col.middle {
    grid-row: 3/4;
    grid-column: 1/2;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
  }
  .col.right, .col.left {
    align-items: center;
    text-align: center;
  }
  .col {
    padding-top: 1rem;
    margin-top: 1rem;
    border-top: 1px solid var(--blue);
  }
  .col:first-child {
    padding-top: 0;
    margin-top: 0;
    border: none;
  }
  .col.middle {
    flex-direction: column;
    align-items: center;
  }
}
</style>