<template>
<div v-if="article">
  <h2>{{ article.title }}</h2>
  <p><small class="text-muted">หมวดหมู่: {{ article.category }}</small></p>
  <!-- แสดงรูปขนาดพอดี -->
  <div v-if="article.image" class="my-3 text-center">
    <img
      :src="article.image"
      :alt="article.title"
      class="article-img rounded"
    />
  </div>

  <div class="mt-3" v-html="article.content"></div>
  <router-link class="btn btn-link mt-3" to="/articles">กลับไปยังบทความ</router-link>
</div>
<div v-else>
<p>ไม่พบบทความ</p>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { sampleArticles } from '../assets/sample-articles'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const article = ref(null)


onMounted(() => {
const id = route.params.id
article.value = sampleArticles.find(a => a.id === id) || null
})
</script>

<style scoped>
.article-img {
  max-width: 100%;    /* ปรับขนาดให้พอดีกับ container */
  height: auto;       /* รักษาสัดส่วนรูป */
  max-height: 400px;  /* สูงไม่เกิน 400px */
  object-fit: cover;  /* ครอบคลุมพื้นที่แบบไม่บิดรูป */
}


</style>