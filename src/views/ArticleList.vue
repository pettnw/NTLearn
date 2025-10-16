<template>
  <div class="container my-5">
    <!-- ส่วนหัว + ช่องค้นหา -->
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
      <h3 class="fw-bold text-primary mb-3 mb-md-0 d-flex align-items-center">
        <i class="bi bi-journal-text me-2"></i>บทความทั้งหมด
      </h3>
      <div class="input-group w-100 w-md-50">
        <span class="input-group-text bg-primary text-white"><i class="bi bi-search"></i></span>
        <input
          v-model="search"
          class="form-control"
          placeholder="ค้นหาบทความ..."
        />
      </div>
    </div>

    <!-- รายการบทความ -->
    <div class="row">
      <div
        v-for="a in filtered"
        :key="a.id"
        class="col-md-6 col-lg-4 mb-4"
      >
        <div class="card h-100 border-0 shadow-sm hover-card">
          <img
            :src="a.image || 'https://via.placeholder.com/400x200?text=Article+Image'"
            class="card-img-top"
            alt="Article Image"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-semibold text-dark">{{ a.title }}</h5>
            <p class="card-text text-muted small flex-grow-1">{{ a.excerpt }}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="badge bg-secondary text-capitalize">{{ a.category }}</span>
              <router-link
                :to="`/articles/${a.id}`"
                class="btn btn-outline-primary btn-sm"
              >
                อ่านต่อ
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- กรณีไม่พบผลลัพธ์ -->
      <div v-if="filtered.length === 0" class="text-center text-muted py-5">
        <i class="bi bi-emoji-frown display-6 d-block mb-2"></i>
        <p>ไม่พบบทความที่ตรงกับคำค้นหา "{{ search }}"</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { sampleArticles } from '../assets/sample-articles'

const search = ref('')
const filtered = computed(() => {
  const s = search.value.trim().toLowerCase()
  if (!s) return sampleArticles
  return sampleArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(s) ||
      a.excerpt.toLowerCase().includes(s)
  )
})
</script>

<style scoped>
.card-img-top {
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.hover-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.hover-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0.75rem 1.25rem rgba(0, 0, 0, 0.15);
}

.input-group .form-control:focus {
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  border-color: #0d6efd;
}
</style>
