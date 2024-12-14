<script>
import MainButton from "@/components/MainButton.vue";
import FormGroup from "@/components/FormGroup.vue";
import godniejBackend from "@/axios/GodniejBackend.js";

export default {
  name: "ContactUsSection",
  components: {FormGroup, MainButton},
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    emailLabel: {
      type: String,
      required: true
    },
    emailPlaceholder: {
      type: String,
      required: true
    },
    nameLabel: {
      type: String,
      required: true
    },
    namePlaceholder: {
      type: String,
      required: true
    },
    surnameLabel: {
      type: String,
      required: true
    },
    surnamePlaceholder: {
      type: String,
      required: true
    },
    messageLabel: {
      type: String,
      required: true
    },
    messagePlaceholder: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      sent: false,
    }
  },
  methods: {
    sendMessage(e) {
      godniejBackend.post("https://backend.godniej.org/api/send-message", {
        "name": e.target.name.value,
        "surname": e.target.surname.value,
        "mail": e.target.email.value,
        "message": e.target.message.value,
        "locale": "pl"
      }).then(
          () => {
            this.sent = true
          }
      )

    }
  }
}
</script>

<template>
<div id="contact_us_wrapper">
 <header>
   <h2 data-aos="fade-left">{{ title }}</h2>
   <h4 data-aos="fade-right">{{ subtitle }}</h4>
 </header>
  <form @submit.prevent="sendMessage" v-if="!sent">
    <FormGroup name="email" :label="emailLabel" :placeholder="emailPlaceholder" type="email" required></FormGroup>
    <div class="row">
      <FormGroup name="name" label="Imię" width="100%" :label="nameLabel" :placeholder="namePlaceholder" required></FormGroup>
      <FormGroup name="surname" label="Nazwisko" width="100%" :label="surnameLabel" :placeholder="surnamePlaceholder" required></FormGroup>
    </div>
    <FormGroup name="message" label="Wiadomość" width="100%" text-area :label="messageLabel" :placeholder="messagePlaceholder" required></FormGroup>
    <MainButton type="submit" data-aos="zoom-in-up">{{ button }}</MainButton>
  </form>
  <div class="thanks_card" data-aos="fade-up" v-else>
    <h3 data-aos="fade-left">Pomyślnie wysłano ✅</h3>
    <p data-aos="fade-right">Cieszymy się bardzo, że do nas piszesz 💛🩷💙. Odpowiemy najszybciej jak to możliwe. Daria, Ania i Ula - Fundacja GodNiej</p>
  </div>
  <div id="bg_bubbles">
    <div class="orange_bubble_left"></div>
    <div class="magenta_bubble_left"></div>
    <div class="blue_bubble_left"></div>
    <div class="orange_bubble_right"></div>
    <div class="magenta_bubble_right"></div>
    <div class="blue_bubble_right"></div>
  </div>
</div>
</template>

<style scoped>
#contact_us_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to top, transparent 90%, #ffffff) ;
  transition: background 0.5s ease-in-out;
}

#contact_us_wrapper header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--blue);
}

#contact_us_wrapper h2 {
  font-size: var(--font_xl);
  text-align: center;
}
#contact_us_wrapper h4 {
  font-size: var(--font_l);
  font-weight: 400;
  text-align: center;
}

@media screen and (max-width: 1264px) {
  #contact_us_wrapper {
    min-height: calc(100vh - 60px - 2rem);
  }
}

form {
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  gap: 1rem;
}
#bg_bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.blue_bubble_left {
  position: absolute;
  top: 35%;
  left: 15%;
  background: radial-gradient(ellipse at center, var(--blue) 60%, #051035);
  width: 20vw;
  height: 20vw;
  min-height: 17rem;
  min-width: 17rem;
  transform: translate(-50%, -50%);
  border-radius: 1000rem;
  z-index: -1;
  opacity: 0.85;
}
.orange_bubble_left {
  position: absolute;
  top: 10%;
  left: 25%;
  background: radial-gradient(ellipse at center, var(--yellow) 60%, #785d00);
  width: 12vw;
  height: 12vw;
  min-height: 10rem;
  min-width: 10rem;
  transform: translate(-50%, -50%);
  border-radius: 1000rem;
  z-index: -1;
  opacity: 0.65;
}
.magenta_bubble_left {
  position: absolute;
  top: 75%;
  left: 12%;
  background: radial-gradient(ellipse at center, var(--magenta) 60%, #2c0016);
  width: 25vw;
  height: 25vw;
  min-width: 20rem;
  min-height: 20rem;
  transform: translate(-50%, -50%);
  border-radius: 1000rem;
  z-index: -1;
  opacity: 0.6;
}
.blue_bubble_right {
  position: absolute;
  top: 82%;
  left: 82%;
  background: radial-gradient(ellipse at center, var(--blue) 60%, #051035);
  width: 10vw;
  height: 10vw;
  min-width: 8rem;
  min-height: 8rem;
  transform: translate(-50%, -50%);
  border-radius: 1000rem;
  z-index: -1;
  opacity: 0.75;
}
.orange_bubble_right {
  position: absolute;
  top: 90%;
  left: 75%;
  background: radial-gradient(ellipse at center, var(--yellow) 60%, #785d00);
  width: 12vw;
  height: 12vw;
  min-width: 10rem;
  min-height: 10rem;
  transform: translate(-50%, -50%);
  border-radius: 1000rem;
  z-index: -1;
  opacity: 0.5;
}
.magenta_bubble_right {
  position: absolute;
  top: 25%;
  left: 90%;
  background: radial-gradient(ellipse at center, var(--magenta) 60%, #2c0016);
  width: 25vw;
  height: 25vw;
  min-width: 20rem;
  min-height: 20rem;
  transform: translate(-50%, -50%);
  border-radius: 1000rem;
  z-index: -1;
  opacity: 0.75;
}
@media screen and (max-width: 1264px) {
  #contact_us_wrapper {
    background: linear-gradient(to top, transparent 90%, #ffffff) rgba(255,255,255,0.5);
  }
}
@media screen and (max-width: 1024px) {
  #contact_us_wrapper {
    padding: 2rem;
  }
}
@media screen and (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}

.thanks_card {
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 1024px;
}

.thanks_card h3 {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: var(--font_xl);
}
.thanks_card p {
  text-align: center;
  color: white;
  font-size: var(--font_m);
}
</style>