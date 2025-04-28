<script>
import MainLink from "@/components/MainLink.vue";
import MemoryAccordion from '../components/MemoryAccordion.vue'

export default {
  name: "OurPatronessView",
  components: { MainLink, MemoryAccordion },
  data() {
    return {
      memories: [
        {
          title: "Służba",
          content: "Stanisława Leszczyńska była całkowicie oddana tym maleńkim istotom i ich matkom. Zawsze pogodna, uśmiechnięta, jeśli nie mogła ratować dzieci, ratowała matki, przynosząc im całe swoje doświadczenie i umiejętności położnej, a jednocześnie podnosząc je na duchu, by wytrzymały i przetrwały.",
          author: "Zofia Raczyńska",
          source: "Zeznania przed komisją badania zbrodni hitlerowskich"
        },
        {
          title: "Modlitwa i praca",
          content: "Widziałam, że się Pani przed każdym odbiorem dziecka modliła- klęczała i chowała twarz w dłoniach, że miała Pani nieraz ciężkie skomplikowane sytuacje, kobiety krzyczały, strasznie krwawiły. (...) Pani organizowała szmaty na krwotoki, pieluszki, kaftaniczki, a środkami, jakimi dysponował ambulans, była krepina i trochę podkładek higienicznych.",
          author: "Janina Strąk",
          source: "Wspomnienia więźniarki obozu Auschwitz-Birkenau"
        },
        {
          title: "Serce i profesjonalizm",
          content: "Zapytała: 'No i co moje dziecko?' Mówiła cicho, a jej głos był bardzo kojący. Przyznałam się wtedy, że strasznie się boję, że bardzo mnie boli i że chyba zaraz będę rodzić. Pogłaskała mnie po twarzy i uśmiechnęła się (...) Wciąż do mnie coś mówiła. Pewnie chciała odwrócić moją uwagę od bólu. Radziła też, jak mam oddychać, jak się ułożyć, jak pomóc dziecku przyjść na świat. Chwaliła mnie bardzo za to, że nie krzyczę. Przestałam się bać. Ręce miała malutkie, delikatne, ruchy łagodne, spokojne a przy tym sprawne i szybkie.",
          author: "Jadwiga Machaj",
          source: "Relacja z pobytu w obozie Auschwitz-Birkenau"
        },
        {
          title: "Wierność powołaniu i odwaga",
          content: "Dzieci żydowskie nie miały prawa żyć- odgórny nakaz władzy łagrowej.(...) Stanisława Leszczyńska zlekceważyła te odgórne nakazy zbrodniarzy. Nie ulękła się, swój obowiązek położnej wypełniała sumiennie. Odcinała pępowinę, wiązała, dziecko zawijała w ligninę i układała matce na pryczy. Dziecko po kilku godzinach umierało, bo Żydówkom nie wolno było dzieci karmić. Umierały na pryczy, w obecności matki, w promieniu jej ciepła i tragicznej miłości.",
          author: "Maria Ślisz-Oyrzyńska",
          source: "Zeznania świadków zbrodni nazistowskich"
        }
      ],
      heroHeight: document.querySelector(".our-patroness-hero-wrapper")?.getBoundingClientRect()?.height || window.innerHeight
    }
  },
  methods: {
    scrollToBioSection() {
      const bioSection = this.$refs.bioSection;
      if (bioSection) {
        bioSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    this.heroHeight = document.querySelector(".our-patroness-hero-wrapper").getBoundingClientRect().height

    window.addEventListener("resize", () => {
      this.heroHeight = document.querySelector(".our-patroness-hero-wrapper").getBoundingClientRect().height
    })
  }
}
</script>

<template>
<div class="bg_container" :style="{
  height: this.heroHeight + 80 + 32 + 'px'
}">
    <div class="shadow"></div>
    <img src="@/assets/patroness_bg.png" alt="" class="bg" />
  </div>
  <section class="our-patroness-hero-wrapper" id="hero_section" ref="heroSection">
    <h1>Nasza Patronka</h1>
    <div class="content">
      <div class="image">
        <div class="overflow_gradient"></div>
        <div class="main-info">
          <h3>Stanisława Leszczyńska</h3>
          <h4>(ur. 8 maja 1896 r., zm.11 marca 1974 r.)</h4>
        </div>
        <img src="@/assets/Stanislawa_Leszczynska.png" alt="Stanisława Leszczyńska" data-aos="fade-up-right" />
      </div>
      <div class="half">
        <div class="main">
          <div class="quote_container">
            <img src="@/assets/quote_open.png" alt="" class="quote_open">
            <p>Jeżeli w mej Ojczyźnie - mimo smutnego z czasów wojny doświadczenia - miałyby dojrzewać tendencje przeciw
              życiu, to wierzę w głos polskich położnych, wszystkich uczciwych matek i ojców, wszystkich uczciwych
              obywateli, w obronie życia i praw dziecka.
              W obozie koncentracyjnym wszystkie dzieci - wbrew wszelkim przewidywaniom - rodziły się żywe, śliczne i
              tłuściutkie. Natura, przeciwstawiając się nienawiści, walczyła o swoje prawa uparcie, nieznanymi rezerwami
              żywotności. Natura jest nauczycielką położnej. Razem z nią walczy o życie i razem z nią propaguje
              najpiękniejszą rzecz na świecie - uśmiech dziecka.
            </p>
            <img src="@/assets/quote_close.png" alt="" class="quote_close">
          </div>
          <h2>~ Stanisława Leszczyńska</h2>
        </div>
        <div class="see_more" @click="scrollToBioSection">
          <h3>Dowiedz się więcej</h3>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
            fill="var(--blue)">
            <path
              d="m480-328 150.67-150.67L584-525.33l-70.67 70.66V-632h-66.66v177.33L376-525.33l-46.67 46.66L480-328Zm0 248q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />
          </svg>
        </div>
      </div>
    </div>
  </section>
  <div id="our_patroness" class="section" ref="bioSection">
    <header>
      <h2>Dlaczego jest patronką fundacji?</h2>
      <h3>oraz Centrum Godnych Narodzin</h3>
    </header>
    <p>Przemawia do nas sposób, w jaki Stanisława Leszczyńska witała na świecie rodzące się dzieci i sposób, w jaki
      otaczała troską ich matki. Cała jej praca i wysiłek poświęcone były temu, <strong class="highlight">aby rodzić i
        przychodzić na świat GodNiej.</strong></p>
  </div>
  <div id="home_and_family" class="history_section">
    <h2>Dom i rodzina</h2>
    <div class="content">
      <div class="text_wrapper">
        <p>Była żoną Bronisława i mamą czworga dzieci: Sylwiny Zenobii, Bronisława, Stanisława i Henryka.</p>
        <p>Dom przy Żurawiej od końca pierwszej wojny był przepełniony dziećmi, pełen śmiechu, zabaw, płaczu, odgłosu
          tłuczonych szyb, dźwięków cytry i pianina, trzaskania drzwiami, zapachu kapuśniaku i czulentu, a zimą
          chanukowych świec, woni choinki na piętrze, makowca, pączków i placków ziemniaczanych smażonych na słoninie.
          Był domem miłości i tolerancji - cnót, w których dzieci Stasi wyrosły, a które potem poniosły w świat. </p>
        <p><i><b>źródło:</b> (M. Stachurska, Położna, Wydawnictwo Burda Media Polska, Warszawa 2020, s. 93)</i></p>
      </div>
      <div class="icon_wrapper" data-aos="fade-up-left">
        <img class="icon" src="@/assets/family_icon.png" data-aos="zoom-in" />
        <div class="overflow_gradient"></div>
        <img src="@/assets/family.png" alt="" class="background" />
      </div>
    </div>
  </div>
  <div id="home_and_family" class="history_section reverse">
    <h2>Nauka i praca</h2>
    <div class="content">
      <div class="text_wrapper">
        <p>Uczyła się w Warszawskiej Miejskiej Szkole Położnych w latach 1920-1922. Otrzymała dyplom z wyróżnieniem.</p>
        <p>Wypowiedziała też po trosze przed Maryją, a po trosze przed sobą obietnicę.
          Maryjo, Najświętsza Panienko, obiecuję, że jeśli podczas przyjmowania porodu stracę choćby jedno dziecko,
          zaprzestanę wykonywania tego zawodu.
          Położną była przez trzydzieści osiem lat. Podczas porodów, które przyjmowała, nie umarło żadne dziecko.
        </p>
        <p><i><b>źródło:</b> (M. Stachurska, Położna, Wydawnictwo Burda Media Polska, Warszawa 2020, s. 99)</i></p>
      </div>
      <div class="icon_wrapper" data-aos="fade-up-right">
        <img class="icon" src="@/assets/mortarboard.png" data-aos="zoom-in" />
        <div class="overflow_gradient"></div>
        <img src="@/assets/books.jpg" alt="" class="background" />
      </div>
    </div>
  </div>
  <div id="home_and_family" class="history_section">
    <h2>Wojna i obóz koncentracyjny
    </h2>
    <div class="content">
      <div class="text_wrapper">
        <p>W 1943 roku została aresztowana razem z córką przez gestapo. Znalazła się w obozie koncentracyjnym
          Auschwitz-Birkenau. Zgłosiła się do pracy w izbie porodowej i przyjęła około 3000 porodów, podczas których nie
          umarło ani jedno dziecko. Więźniarki nazywały ją Mamą.
        </p>
        <p>Sztuba była miejscem, w którym <strong>GODNIE i Z RADOŚCIĄ WITAŁA NA ŚWIECIE NOWEGO CZŁOWIEKA.
            KAŻDEGO.</strong>
        </p>
        <p>Ratowała matki i ich dzieci z narażeniem własnego życia.
        </p>
        <p><i>Wśród tych koszmarnych wspomnień snuje się w mej świadomości jedna myśl, jeden motyw przewodni. Wszystkie
            dzieci urodziły się żywe. Ich celem było żyć! Przeżyło obóz zaledwie trzydzieścioro.
          </i></p>
        <p><i><b>źródło:</b> (M. Stachurska, Położna, Wydawnictwo Burda Media Polska, Warszawa 2020, s. 191/253)</i></p>
      </div>
      <div class="icon_wrapper" data-aos="fade-up-left">
        <img class="icon" src="@/assets/destroyed.png" data-aos="zoom-in" />
        <div class="overflow_gradient"></div>
        <img src="@/assets/auschwitz.jpg" alt="" class="background" />
      </div>
    </div>
  </div>
  <div class="quotes">
    <h2>wspomnienia kobiet</h2>
    <MemoryAccordion :memories="memories" />
  </div>
</template>

<style scoped>
/* First section styles */
.our-patroness-hero-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  flex-direction: column;
  margin-top: calc(80px + 2rem);
}

.bg_container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  max-width: 100%;
}

.bg_container img {
  height: 100%;
  object-fit: cover;
  max-width: 100%;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, white, transparent);
}

h1 {
  color: var(--blue);
  font-size: var(--font_xl);
  font-weight: 700;
  padding: 24px 4rem;
  height: calc((100vh - 80px - 2rem) * 0.2);
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  gap: 2rem;
  min-height: calc((100vh - 80px - 2rem) * 0.8);
  align-items: flex-end;
}

.content .image {
  max-height: calc((100vh - 80px - 2rem) * 0.8);
  object-fit: contain;
  object-position: bottom left;
  height: auto;
  box-shadow: var(--shadow);
  width: 50%;
  position: relative;
}

.image .main-info {
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  max-width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.5rem;
  z-index: 1;
}

.main-info h3 {
  font-size: var(--font_m);
  color: var(--blue);
  font-weight: 700;
  text-align: left;
  margin: 0;
}

.main-info h4 {
  font-size: var(--font_s);
  color: var(--blue);
  font-weight: 500;
  text-align: left;
  margin: 0;
}

.image img {
  width: 100%;
  max-height: calc((100vh - 80px - 2rem) * 0.8);
  object-fit: contain;
  object-position: bottom left;
}

.content .half {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  gap: 2rem;
  padding-right: 4rem;
}

.content .quote_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 3rem;
  position: relative;
  text-align: justify;
}

.quote_container p {
  font-size: var(--font_m);
  color: var(--blue);
  font-weight: 500;
  line-height: 1.5rem;
  text-align: justify;
  font-style: italic;
  margin: 0;
}

.quote_container img {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center center;
}

.quote_open {
  position: absolute;
  top: 0rem;
  left: 0rem;
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1rem;
}

.main h2 {
  font-size: var(--font_l);
  color: var(--blue);
  font-weight: 700;
  text-align: right;
  margin: 0;
}

.quote_close {
  position: absolute;
  bottom: 0rem;
  right: 0rem;
}

.overflow_gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 30%;
  background: linear-gradient(to top, white, transparent);
  z-index: 1;
}

.see_more {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  z-index: 2;
}

.see_more h3 {
  font-size: var(--font_l);
  color: var(--blue);
  font-weight: 700;
  position: relative;
  text-align: center;
}

/* End of first section styles */

/* Second section styles */
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  min-height: 100vh;
  overflow: hidden;
}

@media screen and (max-width: 1024px) {
  h1 {
    padding: 0 2rem;
  }

  .content {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 2rem;
  }

  .content .image {
    width: 100%;
    height: auto;
    max-height: 50vh;
  }

  .content .half {
    width: 100%;
    padding-right: 0;
    padding: 0 2rem;
  }

  .see_more {
    width: 100%;
    justify-content: center;
    align-items: center;
  }


  .bg_container {
    width: 100%;
  }

  .bg_container img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: -1;
  }

  .bg_container .shadow {
    background: linear-gradient(to top, white, transparent);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .content .quote_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    position: relative;
    text-align: justify;
  }

  .quote_container img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    object-position: center center;
  }

  .image .main-info {
    bottom: 1rem;
    left: 2rem;
  }
}

#our_patroness h2 {
  font-size: var(--font_xxl);
  color: var(--blue);
  font-weight: 700;
  background: linear-gradient(to right, var(--magenta), var(--yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

#our_patroness h3 {
  font-size: var(--font_xl);
  color: var(--blue);
  font-weight: 500;
  text-align: center;
}

#our_patroness p {
  font-size: var(--font_l);
  color: var(--blue);
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
  max-width: 1024px;
}

#our_patroness .highlight {
  background: linear-gradient(to right, var(--magenta), var(--yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

#our_patroness {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
}

#our_patroness header {
  position: relative;
}

.history_section {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px - 2rem);
  gap: 1.5rem;
  overflow: hidden;
}

.history_section h2 {
  color: var(--blue);
  font-size: var(--font_xl);
  font-weight: 700;
  padding: 24px 4rem;
  height: calc((100vh - 80px - 2rem) * 0.2);
  display: flex;
  align-items: center;
}

.history_section .content {
  display: flex;
  gap: 2rem;
  min-height: calc((100vh - 80px - 2rem) * 0.8);
  padding: 0;
}

.history_section .text_wrapper,
.history_section .icon_wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}

.history_section .icon_wrapper .background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.history_section .icon_wrapper .overflow_gradient {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  background: linear-gradient(to right, white, transparent 50%), linear-gradient(to bottom, white, transparent 50%), linear-gradient(to top, white, transparent 10%), linear-gradient(135deg, white, transparent 75%), rgba(255, 255, 255, 0.5);
  top: 0;
  left: 0;
  z-index: 1;
}

.history_section .icon_wrapper .icon {
  width: min(512px, 30vw);
  height: min(512px, 30vw);
  z-index: 2;
}

.history_section .text_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 4rem;
  font-size: var(--font_m);
  color: var(--blue);
  gap: 0.5rem;
  z-index: 2;
}

.history_section.reverse .content {
  flex-direction: row-reverse;
  text-align: right;
}

.history_section.reverse h2 {
  text-align: right;
}

.history_section.reverse {
  align-items: flex-end;
}

.history_section.reverse .text_wrapper {
  font-size: var(--font_l);
  color: var(--blue);
  gap: 1rem;
  z-index: 2;
}

.history_section.reverse .overflow_gradient {
  background: linear-gradient(to left, white, transparent 50%), linear-gradient(to bottom, white, transparent 50%), linear-gradient(to top, white, transparent 10%), linear-gradient(225deg, white, transparent 75%), rgba(255, 255, 255, 0.5);
}
.quotes {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  min-height: calc(100vh - 80px - 2rem);
  gap: 2rem;
  overflow: hidden;
}

.quotes h2 {
  font-size: var(--font_xxl);
  color: var(--blue);
  font-weight: 700;
  background: linear-gradient(to right, var(--magenta), var(--yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .history_section h2 {
    height: auto;
  }
  .history_section .content {
    height: auto;
    flex-direction: column;
    width: 100%;
  }

  .history_section.reverse .content {
    flex-direction: column;
  }
  .history_section .text_wrapper {
    padding: 0 2rem;
    width: 100%;
    align-items: flex-start;
  }

  .history_section .icon_wrapper {
    width: 100%;
    height: auto;
    max-height: 50vh;
  }

  .history_section .icon_wrapper .background {
    width: 100%;
    height: 100%;
    max-height: 50vh;
    object-fit: cover;
    top: auto;
    bottom: 0;
  }

  .history_section .icon_wrapper .overflow_gradient {
    width: 100%;
    height: auto;
    max-height: 50vh;
    background: linear-gradient(to left, white, transparent 25%), linear-gradient(to bottom, white, transparent 35%), linear-gradient(to top, white, transparent 15%), linear-gradient(to right, white, transparent 25%), rgba(255, 255, 255, 0.5);
  }

  .history_section h2 {
    padding: 0 2rem;
  }

  .history_section .icon_wrapper .icon {
    width: min(80vw, 256px);
    height: min(80vw, 256px);
  }
  
  .our-patroness-hero-wrapper .content .image .overflow_gradient {
    width: 100%;
  }
}
</style>