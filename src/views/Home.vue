<script setup>
import PostListVue from "@/components/PostList.vue";
import defineProps, { watch, ref } from "vue";
import TagCloudView from "@/components/TagCloud.vue";
import { useRoute } from "vue-router";
let route = useRoute();
let tag = ref(route.params.tag);
watch(
  () => route.params.tag,
  (newTag) => {
    tag.value = newTag;
    console.log("");
  }
);
</script>

<template>
  <div class="container">
    <PostListVue :tag="tag" />
    <TagCloudView />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>