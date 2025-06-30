<template>
    <div class="recomendation-wrapper" v-if="recomendation">
        <aside>
            <img :src="`https://backend.godniej.org${recomendation.Zdjecie.formats.medium.url}`"
                :alt="recomendation.Tytul" />
            <div class="content">
                <header>
                    <h1>{{ recomendation.Tytul }}</h1>
                    <h2>{{ recomendation.Autor }}</h2>
                </header>

                <ul>
                    <li><strong>{{ recomendation.Typ === 'Książka' ? 'Wydawnictwo' : 'Źródło' }}:</strong> {{
                        recomendation.Zrodlo }}</li>
                    <li v-for="feature in recomendation.DodatkoweCechy" :key="feature.id"><strong>{{ feature.Nazwa
                    }}:</strong> {{ feature.Wartosc }}</li>
                </ul>

                <main-link :to="recomendation.Odnosnik" anchor>
                    {{ recomendation.Typ === 'Książka' ? 'Kup książkę' : 'Przeczytaj artykuł' }}
                </main-link>
                <main-link to="/warte_przeczytania" secondary>
                    <img src="@/assets/BackArrow.png" alt="Powrót">Powrót
                </main-link>
            </div>


        </aside>
        <main>
            <section v-for="section in recomendation.Sekcje" :key="section.id">
                <h3>{{ section.Tytul }}</h3>
                <p>{{ section.Tresc }}</p>
            </section>
        </main>
    </div>
</template>
<script>
import godniejBackend from '@/axios/GodniejBackend';
import MainLink from '@/components/MainLink.vue';

export default {
    name: "ReadReccomendationSingleView",
    components: {
        MainLink,
    },
    data() {
        return {
            recomendation: null,
        }
    },
    mounted() {
        const recomendationSlug = this.$route.params.slug;
        console.log("Fetching recomendation with slug:", recomendationSlug);
        godniejBackend.get('/recommended-contents',
            {
                params: {
                    "filters[slug][$eq]": recomendationSlug,
                    "populate[0]": "Zdjecie",
                    "populate[1]": "DodatkoweCechy",
                    "populate[2]": "Sekcje"
                }
            }
        ).then(response => {
            this.recomendation = response.data.data[0];
        }).catch(error => {
            console.error("Error fetching recomendation:", error);
        });
    },
}
</script>
<style scoped>
.recomendation-wrapper {
    width: 100%;
    min-height: calc(100vh - 80px - 2rem);
    padding: 2rem 4rem;
    margin-top: calc(80px + 2rem);
    display: flex;
    align-items: flex-start;
    gap: 2rem;
}

aside {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

aside img {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 1rem;
}

aside header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

header h1 {
    font-size: var(--font_l);
    color: var(--blue);
}

header h2 {
    font-size: var(--font_m);
    color: var(--blue);
    font-weight: 400;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li {
    font-size: var(--font_s);
    color: var(--blue);
    margin-bottom: 0.5rem;
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

main section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

main section h3 {
    font-size: var(--font_l);
    color: var(--blue);
}

main section p {
    font-size: var(--font_m);
    color: var(--blue);
}

@media screen and (max-width: 1024px) {
    .recomendation-wrapper {
        min-height: calc(100vh - 60px - 2rem);
        margin-top: calc(60px + 2rem);
    }
}

@media screen and (max-width: 1024px) {
    .recomendation-wrapper {
        padding: 2rem;
    }

}

@media screen and (max-width: 768px) {
    .recomendation-wrapper {
        flex-direction: column;
        align-items: center;
    }
    aside {
        width: 100%;
    }

    aside img {
        width: calc(100vw - 4rem);
        height: calc(150vw - 6rem);
    }
}

@media screen and (max-width: 768px) and (min-width: 480px) {
    aside {
        flex-direction: row;
        gap: 2rem;
    }

    aside img {
        width: 250px;
        height: 375px;
    }
}

.secondary.main_link img {
    height: var(--font_l);
    width: var(--font_l);
    margin-right: 0.5rem;
}

.main_link {
    font-size: var(--font_m);
}
</style>