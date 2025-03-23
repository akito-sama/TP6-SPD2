<script setup>
import { getPost } from "@/composables/getPost";
import defineProps, { onMounted } from "vue"
import SinglePostVue from "@/components/SinglePost.vue"

defineProps({
    id: Number
});
let element;

</script>

<template>
    <SinglePostVue :id="id" abrege="false"/>
</template>