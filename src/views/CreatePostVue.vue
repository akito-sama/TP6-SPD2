<script setup>
import { getPosts } from "@/composables/getPosts";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let title = ref("");
let description = ref("");
let Tags = ref("");
let tags_list = computed(() => Tags.value.split(";").map((tag) => tag.trim()));
let submit = async () => {
  const newPost = {
    title: title.value,
    body: description.value,
    tags: Tags.value.split(",").map((tag) => tag.trim()),
  };

  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  router.push("/");
};
</script>


<template>
  <div>
    <form action="" @submit.prevent="submit">
      <div class="section">
        <label for="">Title: </label>
        <input type="text" v-model="title" />
      </div>
      <div class="section">
        <label for="">description: </label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          v-model="description"
        ></textarea>
      </div>
      <div class="section">
        <label for="">Tags: </label>
        <input type="text" v-model="Tags" />
      </div>
      <div class="section">
        <button type="submit">submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>
