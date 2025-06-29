<template>
    <div class="recomendation-card" :style="{
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

    </div>
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
        }
    }
}
</script>
<style scoped>
.recomendation-card {
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    background-size: cover;
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