<script>
export default {
  name: "Popup",
  props: {
    active: Boolean,
    header: String
  },
}
</script>

<template>
  <Transition name="fade">
    <div class="popup-shadow" v-if="active">
      <div class="popup" aria-label="popup">
        <header class="width_full">
          <h3>{{ header }}</h3>
          <button @click="$emit('closePopup')">
            <!--Icon source - https://www.flaticon.com/free-icon/delete_32178?term=close&page=1&position=26&origin=search&related_id=32178-->
            <svg version="1.1" id="fi_32178" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48" height="48" viewBox="0 0 348.333 348.334" style="enable-background:new 0 0 348.333 348.334;" xml:space="preserve">
                <g>
                    <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
                        c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
                        c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
                        l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
                        L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"></path>
                </g>
            </svg>
          </button>
        </header>
        <div class="line"></div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.popup-shadow {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.popup-shadow * {
  transition: all 0.5s ease-in-out;
}

.popup {
  background-color: white;
  border-radius: 1rem;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-height: 90vh;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  overflow-y: auto;
}

.popup header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
header h3 {
  font-size: var(--font_xl);
  color: var(--blue);
  background: linear-gradient(to right, var(--yellow), var(--magenta), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

header button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--blue);
  fill: var(--blue);
}
.line{
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--yellow), var(--magenta), var(--blue));
}
.width_full {
  width: 100%;
}


@media screen and (max-width: 768px) {
  .popup {
    width:90%;
  }
}

@media screen and (max-width: 512px) {
  .popup {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    max-height: 100vh;
    padding: 2rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>