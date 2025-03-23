<script setup>
import { getPost} from '@/composables/getPost';
import defineProps, { onMounted, ref, computed } from 'vue';
const props = defineProps({
    id: Number,
    abrege: Boolean,
});

const title = ref("");
const Tags = ref([]);
const article = ref("")
const snippet = computed(() => article.value.substring(0, 50) + (article.value.length > 50 ? "..." : ""));
const abrege = ref(props.abrege);
const id = ref(props.id);
onMounted(async () => {
    try {
        let value = await getPost(id.value);
        title.value = value["title"];
        Tags.value = value["tags"];
        article.value = value["body"];
    }
    catch (err) {
        return null
    }
});
</script>

<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <h4 v-if="abrege">{{ snippet }}</h4>
        <h4 v-else>{{ article }}</h4>
        <div>
            <ul class="tags">
                <li v-for="tag in Tags" :key="tag">
                    {{tag}}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.tags {
    display: flex;
    justify-content: right;
    gap: 20px;
}

.tags li {
    background-color: #406950;
    color: white;
    padding: 5px;
    border-radius: 10px;
}

.container {
    padding: 20px;
}
</style>