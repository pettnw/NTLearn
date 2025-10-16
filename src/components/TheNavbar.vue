<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
    <div class="container">
      <!-- โลโก้ -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <span class="fs-3 me-2">📖</span>
        <span class="fw-bold fs-5">NTLearn</span>
      </router-link>

      <!-- ปุ่มเปิดเมนูมือถือ -->
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        aria-controls="navMenu"
        aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- เมนูหลัก -->
      <div :class="['collapse navbar-collapse', { show: isMenuOpen }]" id="navMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in links" :key="link.to">
            <router-link
              class="nav-link"
              :to="link.to"
              active-class="active"
              exact
              @click="closeMenu"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// สถานะเมนู
const isMenuOpen = ref(false);

// toggle Hamburger Menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// ปิดเมนูเมื่อกดลิงก์
const closeMenu = () => {
  isMenuOpen.value = false;
};

// ลิงก์เมนู
const links = [
  { name: 'หน้าหลัก', to: '/' },
  { name: 'บทความ', to: '/articles' },
  { name: 'เกี่ยวกับ', to: '/about' },
  { name: 'ติดต่อ', to: '/contact' },
];
</script>

<style scoped>


.navbar {
  transition: all 0.3s ease;
}

.nav-link {
  position: relative;
  transition: color 0.2s ease;
  font-weight: 500;
}

.nav-link:hover {
  color: #ffeb3b !important;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 0;
  height: 2px;
  background-color: #ffeb3b;
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 80%;
}

.router-link-active.nav-link {
  color: #fff !important;
  font-weight: 600;
}

.router-link-active.nav-link::after {
  width: 80%;
  background-color: #ffc107;
}

.btn-light {
  color: #0d6efd;
  border-radius: 50px;
  transition: all 0.25s ease;
}

.btn-light:hover {
  background-color: #f8f9fa;
  color: #0a58ca;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
}
</style>
