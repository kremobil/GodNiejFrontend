<template lang="html">
   <Popup :active="active" :header="data.Naglowek" v-if="data" @close-popup="$emit('closePopup')">
     <section class="popup-main">
       <button class="filled_button fill_yellow width_full" v-if="formProgress === 1" @click="removeTax = !removeTax">
         <!--Icon source - https://www.flaticon.com/free-icon/question_471664?term=question&page=1&position=3&origin=search&related_id=471664-->
         <svg version="1.1" id="fi_471664" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" v-if="!removeTax">
                      <g>
                          <g>
                              <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                  C512,114.509,397.504,0,256,0z M256,476.279c-121.462,0-220.279-98.816-220.279-220.279S134.538,35.721,256,35.721
                                  c121.463,0,220.279,98.816,220.279,220.279S377.463,476.279,256,476.279z"></path>
                          </g>
                      </g>
           <g>
                          <g>
                              <path d="M248.425,323.924c-14.153,0-25.61,11.794-25.61,25.946c0,13.817,11.12,25.948,25.61,25.948
                                  c14.49,0,25.946-12.131,25.946-25.948C274.371,335.718,262.577,323.924,248.425,323.924z"></path>
                          </g>
                      </g>
           <g>
                          <g>
                              <path d="M252.805,127.469c-45.492,0-66.384,26.959-66.384,45.155c0,13.142,11.12,19.208,20.218,19.208
                                  c18.197,0,10.784-25.948,45.155-25.948c16.848,0,30.328,7.414,30.328,22.915c0,18.196-18.871,28.642-29.991,38.077
                                  c-9.773,8.423-22.577,22.24-22.577,51.22c0,17.522,4.718,22.577,18.533,22.577c16.511,0,19.881-7.413,19.881-13.817
                                  c0-17.522,0.337-27.631,18.871-42.121c9.098-7.076,37.74-29.991,37.74-61.666S295.937,127.469,252.805,127.469z"></path>
                          </g>
                      </g>
                  </svg>
         <!--Icon source - https://www.flaticon.com/free-icon/previous_151846?term=back&page=1&position=27&origin=search&related_id=151846-->
         <svg version="1.1" id="fi_151846" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 55.753 55.753" style="enable-background:new 0 0 55.753 55.753;" xml:space="preserve" v-else>
                      <g>
                          <path d="M12.745,23.915c0.283-0.282,0.59-0.52,0.913-0.727L35.266,1.581c2.108-2.107,5.528-2.108,7.637,0.001
                              c2.109,2.108,2.109,5.527,0,7.637L24.294,27.828l18.705,18.706c2.109,2.108,2.109,5.526,0,7.637
                              c-1.055,1.056-2.438,1.582-3.818,1.582s-2.764-0.526-3.818-1.582L13.658,32.464c-0.323-0.207-0.632-0.445-0.913-0.727
                              c-1.078-1.078-1.598-2.498-1.572-3.911C11.147,26.413,11.667,24.994,12.745,23.915z"></path>
                      </g>
                  </svg>
         <p>{{ removeTax ? data.PrzyciskOdliczPodatekWyloczony : data.PrzyciskOdliczPodatekWlaczony                    }}</p>
       </button>
       <div class="ammounts" v-if="!removeTax && formProgress === 1">
         <button class="filled_button ammount" :class="{
                          fill_blue: ammount.selected,
                          fill_magenta: !ammount.selected
                      }" v-for="ammount in ammounts" @click="selectAmmount(ammount)">
           <h4>{{ ammount.value === "custom" ? data.PrzyciskInnaKwota : ammount.value + "zł"}}</h4>
         </button>
       </div>
       <div class="custom_ammount_input width_full" v-if="showCustomAmmount && !removeTax && formProgress === 1">
         <label for="custom_amm">{{ data.PolePodajKwote }}</label>
         <input type="number" id="custom_amm" v-model="customAmmount">
         <p>zł</p>
       </div>
       <p v-if="errorMessage && formProgress === 1" class="error">{{errorMessage}}</p>
       <button class="filled_button fill_blue blue_hover width_full" v-if="!removeTax && formProgress === 1" @click="getRequiredData">Przejdź dalej</button>
       <div class="remove-tax" v-if="removeTax && formProgress === 1">
         {{ data.TrescOdliczPodatek }}
       </div>
       <h2 v-if="formProgress === 2">Kwota wspracia: {{this.realAmount/100}}zł</h2>
       <form @submit.prevent="processPayment" v-if="formProgress === 2">
         <form-group name="email" label="E-mail" type="email" required></form-group>
         <div class="checkbox-group">
           <input type="checkbox" id="additional-data" name="additional" @change="changeAdditionalData">
           <label for="additional-data">Chcę dokonać wpłaty imiennej</label>
         </div>
         <form-group name="name" label="Imię" width="100%" v-if="additionalData" required></form-group>
         <form-group name="surname" label="Nazwisko" width="100%" v-if="additionalData" required></form-group>
         <p v-if="errorMessage && formProgress === 2" class="error">{{errorMessage}}</p>
         <main-button type="submit" :disabled="blockForm">{{data.PrzyciskPlatonosci}}</main-button>
         <main-button secondary type="button" @click="formProgress = 1">Anuluj</main-button>
       </form>

     </section>
     <p class="sperator" v-if="!removeTax && formProgress === 1">{{ data.Odzielenie }}</p>
     <button class="filled_button fill_yellow width_full" @click="accountNumber = !accountNumber" v-if="!removeTax && formProgress === 1">
       <!--Icon source - https://www.flaticon.com/free-icon/question_471664?term=question&page=1&position=3&origin=search&related_id=471664-->
       <svg version="1.1" id="fi_471664" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                          <g>
                              <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                  C512,114.509,397.504,0,256,0z M256,476.279c-121.462,0-220.279-98.816-220.279-220.279S134.538,35.721,256,35.721
                                  c121.463,0,220.279,98.816,220.279,220.279S377.463,476.279,256,476.279z"></path>
                          </g>
                      </g>
         <g>
                          <g>
                              <path d="M248.425,323.924c-14.153,0-25.61,11.794-25.61,25.946c0,13.817,11.12,25.948,25.61,25.948
                                  c14.49,0,25.946-12.131,25.946-25.948C274.371,335.718,262.577,323.924,248.425,323.924z"></path>
                          </g>
                      </g>
         <g>
                          <g>
                              <path d="M252.805,127.469c-45.492,0-66.384,26.959-66.384,45.155c0,13.142,11.12,19.208,20.218,19.208
                                  c18.197,0,10.784-25.948,45.155-25.948c16.848,0,30.328,7.414,30.328,22.915c0,18.196-18.871,28.642-29.991,38.077
                                  c-9.773,8.423-22.577,22.24-22.577,51.22c0,17.522,4.718,22.577,18.533,22.577c16.511,0,19.881-7.413,19.881-13.817
                                  c0-17.522,0.337-27.631,18.871-42.121c9.098-7.076,37.74-29.991,37.74-61.666S295.937,127.469,252.805,127.469z"></path>
                          </g>
                      </g>
                  </svg>
       <p>{{ accountNumber ? data.PrzyciskPrzelewuWyloczony : data.PrzyciskPrzelewuWloczony }}</p>
     </button>
     <p class="account-number" v-if="accountNumber && formProgress === 1">
       <strong>Numer konta:</strong> {{ data.NumerKonta }}
     </p>
     <p class="account-number" v-if="accountNumber && formProgress === 1">
       <strong>Tytuł przelewu:</strong> "Na cele statutowe fundacji"
     </p>
   </Popup>
</template>
<script>
import godniejBackend from '@/axios/GodniejBackend';
import Popup from "@/components/Popup.vue";
import FormGroup from "@/components/FormGroup.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  components: {MainButton, FormGroup, Popup},
    props: {
        active: Boolean,
    },
    data() {
        return {
            ammounts: [
                { value: 10, selected: false },
                { value: 20, selected: false },
                { value: 50, selected: false },
                { value: 100, selected: false },
                { value: "custom", selected: false },
            ],
            showCustomAmmount: false,
            customAmmount: 1,
            removeTax: false,
            accountNumber: false,
            data: null,
            realAmount: null,
            formProgress: 1,
            errorMessage: null,
          additionalData: false,
          blockForm: false
        }
    },
  watch: {
    customAmmount(newValue, oldValue) {
      if (typeof newValue !== 'number' || (newValue * 100) % 1 !== 0 || newValue < 0) {
        this.customAmmount = oldValue;
      } else {
        this.realAmount = newValue * 100;
      }
    }
  },
    methods: {
        selectAmmount(ammount) {
            this.ammounts.forEach(item => item.selected = false);
            ammount.selected = true;
            if (ammount.value === "custom") {
                this.showCustomAmmount = true;
                this.realAmount = this.customAmmount * 100;
            } else {
                this.showCustomAmmount = false;
                this.realAmount = ammount.value * 100;
            }},
      processPayment(e) {
          const requestData = {
            amount: this.realAmount,
            currency: "PLN",
            email: e.target.email.value,
            name: e.target.name ? e.target.name.value : null,
            surname: e.target.surname ? e.target.surname.value : null,
            path: this.$route.path
          }

          this.blockForm = true

          godniejBackend.post("/donate", requestData).then(
              res => res.data
          ).then((data) => {
            window.location.href = data.transactionUrl;
            this.blockForm = false
          }).catch(
              err => {
                console.log(err)
                this.errorMessage = err.response.data.error.details.details[0];
                this.blockForm = false
              }
          )
      },
      changeAdditionalData(e) {
          this.additionalData = e.target.checked
      },
      getRequiredData() {
          if (this.realAmount === null) {
            this.errorMessage = "Aby Przejść dalej musisz wybrać kwotę wsparcia"
          } else if (this.realAmount < 100) {
            this.errorMessage = "Minimalna kwota wspracia to 1zł"
          } else {
            this.errorMessage = null
            this.formProgress = 2
          }
      }
    },
    mounted() {
        godniejBackend.get('/support').then(response => response.data.data ).then(data => this.data = data);
    },
}
</script>
<style scoped>
    .fill_yellow {
        background-color: var(--yellow);
        color: var(--blue);
        fill: var(--blue);

    }

    .fill_magenta {
        background-color: var(--magenta);
        color: var(--blue);
        fill: var(--blue);


    }

    .fill_blue {
        background-color: var(--blue);
        color: white;
    }

    .fill_yellow:hover {
        background-color: #f8c733;
    }

    .fill_magenta:hover {
        background-color: #dd5398;
    }

    .blue_hover:hover {
        background-color: #27478d;
        color: white;
    }
    .popup-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0;
    }

    .ammount {
        flex: 1 1 fit-content;
    }

    .content {
      width: 100%;
    }

    .filled_button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        border: none;
        transition: border 0.5s ease-in-out, background-color 0.5s ease-in-out;
        cursor: pointer;
        font-size: var(--font-l);
        font-weight: 700;
    }
    .ammounts {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    }
    .sperator {
        font-size: var(--font-l);
        font-weight: 700;
    }

    .custom_ammount_input {
        display: flex;
        border-radius: 0.5rem;
        overflow: hidden;
        border: 2px solid var(--blue);
        align-items: center;
    }

    .custom_ammount_input input {
        padding: 0.5rem 1rem;
        border: none;
        width: 100%;
        font-size: var(--font-l);
        color: var(--blue);
        font-weight: 700;
    }

    .custom_ammount_input label {
        padding: 1rem 2rem;
        background-color: var(--blue);
        color: white;
        width: fit-content;
        min-width: fit-content;
        font-size: var(--font-l);
        font-weight: 700;
    }

    .custom_ammount_input input:focus {
        outline: none;
    }

    .custom_ammount_input p {
        color: var(--blue);
        font-size: var(--font-l);
        font-weight: 700;
        padding-right: 1rem;
    }

    @media screen and (max-width: 512px) {
        .popup {
            width: 100%;
            height: 100vh;
            border-radius: 0;
            max-height: 100vh;
          padding: 2rem;
        }
        .filled_button {
            padding: 1rem;
        }

        .custom_ammount_input input {
            padding: 0.5rem;
        }

        .custom_ammount_input label {
            padding: 1rem;
        }
    }

    .remove-tax, .account-number {
        max-width: 600px;
        text-align: center;
        font-size: var(--font-l);
        font-weight: 700;
    }

    .width_full {
      width: 100%;
    }

    .error {
      color: red;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .checkbox-group {
      display: flex;
      gap: 0.5rem;
    }

    .checkbox-group label {
      font-size: var(--font_l);
      font-weight: 500;
      color: var(--blue);
    }

    .checkbox-group input[type=checkbox]::-ms-check {
      background-color: var(--blue);
    }
</style>