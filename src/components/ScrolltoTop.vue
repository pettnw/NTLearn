<template>
  <button
    v-show="visible"
    class="scroll-to-top"
    @click="scrollToTop"
    title="กลับขึ้นบน"
  >
    <!-- ใช้ไอคอน SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V4.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3-.007-.007a.498.498 0 0 0-.697.007l-3 3a.5.5 0 1 0 .708.708L7.5 4.707V11.5a.5.5 0 0 0 .5.5z"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const handleScroll = () => {
  visible.value = window.scrollY > 200; // โชว์เมื่อเลื่อนลงเกิน 200px
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0d6efd;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s, opacity 0.3s;
  opacity: 0.8;
  z-index: 1000;
}

.scroll-to-top:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  opacity: 1;
}

/* ปรับขนาดสำหรับมือถือ */
@media (max-width: 576px) {
  .scroll-to-top {
    width: 40px;
    height: 40px;
    bottom: 15px;
    right: 15px;
  }
  .scroll-to-top svg {
    width: 20px;
    height: 20px;
  }
}
</style>
