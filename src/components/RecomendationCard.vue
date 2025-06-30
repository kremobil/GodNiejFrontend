<template>
    <router-link :to="`/1a9c4ffa-f1c5-47b6-8a19-6d9743eca37e/${slug}`" class="recomendation-card" :style="{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 50%),
        url('${image}') no-repeat center center`
    }">
        <div class="recomendation-card-header">
            <h3>{{ title }}</h3>
            <h4>{{ author }}</h4>
        </div>
        <div class="recomendation-card-source">
            <p><b>{{ type === "book" ? "Wydawnictwo:" : "Źródło:" }}</b> {{ source }}</p>
        </div>

    </router-link>
</template>
<script>
export default {
    name: "RecomendationCard",
    props: {
        title: {
            type: String,
            default: "Ciąża. Poradnik"
        },
        author: {
            type: String,
            default: "Karolina Laskowska"
        },
        source: {
            type: String,
            default: "SBM"
        },
        type: {
            type: String,
            default: "book"
        },
        image: {
            type: String,
            default: "@/assets/RecomendationPlaceholder.png"
        },
        slug: {
            type: String,
            default: ""
        }
    }
}
</script>
<style scoped>
.recomendation-card {
    width: clamp(200px, calc(150px + 8vw), 400px);
    height: clamp(300px, calc(225px + 12vw), 600px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-size: cover;
    text-decoration: none;
}

.recomendation-card-header {
    display: flex;
    flex-direction: column;
}

.recomendation-card-header h3 {
    font-size: var(--font_m);
    background: linear-gradient(to right, var(--yellow), var(--magenta));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.recomendation-card-header h4 {
    font-size: var(--font_s);
    color: #d4d4d4;
    font-weight: 400;
}

.recomendation-card-source p {
    font-size: var(--font_s);
    color: #d4d4d4;
    font-weight: 400;
}
</style>