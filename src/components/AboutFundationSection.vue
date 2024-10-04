<script>
export default {
  name: "AboutFundationSection",
}
</script>

<template>
  <section class="about-foundation-wrapper">
    <div class="half image-half">
      <img src="@/assets/OurTeamResized.png" alt="Nasz zespół">
      <div class="gradient"></div>
    </div>
    <div class="half content-half">
      <h2>Poznaj naszą fundację</h2>
      <p>Fundacja GodNiej jest owocem spotkania trzech różnych dróg życiowych, trzech różnych pokoleń, trzech ścieżek zawodowych, ale tej samej wrażliwości, żeby to, co piękne i trudne w kobiecości zauważyć, dowartościować i wspólnie przeżyć. Skupiamy się na działaniach, które nadają sens każdemu  doświadczeniu kobiety, na każdym etapie jej życia: od pierwszych kroków dziewczynki ku kobiecości, przez macierzyństwo, aż po dojrzałą kobiecość. Wspieramy też osoby, które jej w tej drodze towarzyszą.</p>
      <p>Istotnym celem aktywności naszej Fundacji jest prowadzenie wszelkich działań w przestrzeni okołoporodowej, które będą czyniły ją coraz bardziej bezpieczną, czułą i troskliwą. Aktywność ta promuje podnoszenie kompetencji w zakresie istoty godnego rodzenia i komunikacji w zespole interdyscyplinarnym osób profesjonalnie zajmujących się  kobietą w okresie dojrzewania, ciąży, porodu, połogu, okresie okołomenopauzalnym. </p>
    </div>
  </section>
  <section class="our-mission-wrapper">
    <div class="half content-half">
      <h2>Nasza misja</h2>
      <p>Cele naszej fundacji chcemy realizować poprzez prowadzenie warsztatów i  grup wsparcia dla kobiet i profesjonalistów, grup terapeutycznych, kręgów kobiecych, indywidualnej szkoły rodzenia, spotkań dla rodziców, ceremonii otulania, na organizowaniu konferencji, sympozjów, szkoleń, wystaw itp. </p>
      <p><strong>Największym naszym marzeniem i podstawowym celem Fundacji jest stworzenie Centrum Godnych Narodzin </strong>, - miejsca, w którym otoczymy opieką, troską i uważnością kobietę-matkę, mężczyznę-ojca i ich dziecko. To także miejsce, w którym będziecie mogli spotkać się z sobą, z innymi, z nami oraz z profesjonalistami, których uwagi będziecie potrzebować. Dołożymy wszelkich starań byście poczuli się GodNiej, jak w Domu.</p>
    </div>
    <div class="half image-half">
      <img src="@/assets/OurTeamBackResized.png" alt="Nasz zespół">
      <div class="gradient"></div>
    </div>
  </section>
</template>

<style scoped>
.about-foundation-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  margin-top: calc(80px + 2rem);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.half {
  display: flex;
  flex: 1 1 344px;
  height: 100%;
  position: relative;
  flex-direction: column;
}

@media screen and (max-width: 1024px) {
  .about-foundation-wrapper {
    padding: 2rem;
  }
}

img {
  width: 100%;
  object-fit: contain;
  object-position: bottom;
}
.gradient {
  height: 100px;
  background: linear-gradient(to top, #fff, transparent);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.image-half {
  justify-content: flex-end;
}

.content-half h2 {
  font-size: var(--font_xl);
  color: var(--blue);
  text-align: center;
}
.content-half p {
  font-size: var(--font_m);
  margin-top: 1rem;
  text-align: justify;
}
.our-mission-wrapper {
  width: 100%;
  display: flex;
  min-height: calc(100vh - 80px - 2rem);
  padding: 4rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
}
</style>