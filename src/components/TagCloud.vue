<script setup>
import { getPosts } from "@/composables/getPosts";
import { onMounted, ref } from "vue";

let tags = ref([]);
onMounted(async () => {
  let fake_tags = await getPosts();
  fake_tags.forEach((element) => {
    element.tags.forEach((tag) => {
      if (!tags.value.includes(tag)) {
        tags.value.push(tag);
      }
    });
  });
});
</script>

<template>
  <ul>
    <div v-for="tag in tags" :key="tag">
      <router-link class="custom-link" :to="`/tags/${tag}`">
        {{ tag }}
      </router-link>
    </div>
  </ul>
</template>

<style scoped>
.custom-link {
  background-color: #406950;
  color: white;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>