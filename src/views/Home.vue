<template>
  <div class="container my-5">
    <!-- Hero Section -->
    <section class="p-5 mb-5 rounded text-center text-white shadow-lg position-relative overflow-hidden"
      style="background: linear-gradient(135deg, #007bff, #6610f2);">
      <div class="position-relative" style="z-index: 2;">
        <h1 class="display-5 fw-bold mb-3">
          ยินดีต้อนรับสู่ <span class="text-warning">NTLearn</span>
        </h1>
        <p class="lead mb-4">
          แหล่งรวมบทความ ความรู้ และคอร์สสั้น ๆ ที่เข้าใจง่ายและเรียนได้ทุกที่
        </p>
        <router-link to="/articles" class="btn btn-light btn-lg px-4 shadow-sm fw-semibold rounded-pill text-primary border-0">
          <i class="bi bi-journal-text me-2"></i>ดูบทความทั้งหมด
        </router-link>
      </div>
      <div class="position-absolute top-0 start-0 w-100 h-100"
        style="background: rgba(255,255,255,0.05) url('https://www.transparenttextures.com/patterns/cubes.png'); z-index:1;">
      </div>
    </section>

    <!-- บทความแนะนำ -->
    <section>
      <h4 class="fw-bold text-primary mb-4 text-center">
        <i class="bi bi-stars me-2"></i>บทความแนะนำ
      </h4>

      <!-- การ์ด -->
      <div class="row justify-content-center">
        <div v-for="article in paginatedArticles" :key="article.id"
          class="col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <div class="card border-0 shadow-sm h-100 hover-card" style="width: 100%; max-width: 300px;">
            <img :src="article.image ||
              'https://via.placeholder.com/400x200?text=Article+Image'
              " class="card-img-top rounded-top" alt="article image" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-semibold text-dark text-center">
                {{ article.title }}
              </h5>
              <p class="card-text text-muted small flex-grow-1 text-center">
                {{ article.excerpt }}
              </p>
              <router-link :to="`/articles/${article.id}`"
                class="btn btn-outline-primary btn-sm mt-2 w-100 fw-semibold">
                อ่านต่อ
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- ปุ่มเปลี่ยนหน้า -->
      <nav class="mt-4 d-flex justify-content-center">
        <ul class="pagination mb-0">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="prevPage">ก่อนหน้า</button>
          </li>

          <li v-for="n in totalPages" :key="n" class="page-item" :class="{ active: n === currentPage }">
            <button class="page-link" @click="goToPage(n)">{{ n }}</button>
          </li>

          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="nextPage">ถัดไป</button>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { sampleArticles } from '../assets/sample-articles'

const currentPage = ref(1)
const itemsPerPage = 3

// คำนวณจำนวนหน้า
const totalPages = computed(() => Math.ceil(sampleArticles.length / itemsPerPage))

// บทความที่จะแสดงในแต่ละหน้า
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sampleArticles.slice(start, end)
})

// ฟังก์ชันควบคุมหน้า
function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}
</script>

<style scoped>
.hover-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.75rem 1.25rem rgba(0, 0, 0, 0.15);
}

.card-img-top {
  height: 180px;
  object-fit: cover;
}

.page-link {
  cursor: pointer;
}
</style>
