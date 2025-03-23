<script setup>
import { getPosts } from "@/composables/getPosts";
import SinglePostVue from "@/components/SinglePost.vue";
import { ref, onMounted, defineProps, watch } from "vue";
const props = defineProps({
  tag: {
    type: String,
    default: "",
  },
});

let posts = ref([]);

const fetchPosts = async () => {
  console.log("Fetching posts for tag:", props.tag);
  posts.value = (await getPosts()).filter(
    (value) => value.tags.includes(props.tag) || props.tag === ""
  );
};

onMounted(fetchPosts);

watch(() => props.tag, fetchPosts);
</script>

<template>
  <div class="grid">
    <div v-for="post in posts" :key="post.id" class="container">
      <SinglePostVue :id="post.id" :abrege="true" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>