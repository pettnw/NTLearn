<template>
  <div class="container py-5">
    <div class="row align-items-center">
      <!-- Contact Form -->
      <div class="col-md-6 mb-5 mb-md-0">
        <div class="card border-0 shadow-lg p-4 rounded-4">
          <h3 class="fw-bold text-primary mb-4">
            <i class="bi bi-envelope-paper me-2"></i>ติดต่อเรา
          </h3>

          <form @submit.prevent="send">
            <div class="mb-3">
              <label class="form-label fw-semibold">ชื่อ</label>
              <input v-model="name" type="text" class="form-control rounded-3 shadow-sm" placeholder="กรอกชื่อของคุณ"
                required />
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">อีเมล</label>
              <input v-model="email" type="email" class="form-control rounded-3 shadow-sm"
                placeholder="example@email.com" required />
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">ข้อความ</label>
              <textarea v-model="message" class="form-control rounded-3 shadow-sm" rows="4"
                placeholder="พิมพ์ข้อความของคุณที่นี่..." required></textarea>
            </div>

            <button class="btn btn-primary w-100 py-2 fw-semibold shadow-sm rounded-3">
              <i class="bi bi-send-fill me-2"></i>ส่งข้อความ
            </button>
          </form>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="col-md-6 text-center text-md-start">
        <h3 class="fw-bold mb-3 text-primary">
          <i class="bi bi-geo-alt-fill me-2"></i>ข้อมูลเพิ่มเติม
        </h3>
        <p class="text-muted mb-4">
          หากคุณมีคำถาม ข้อเสนอแนะ หรืออยากร่วมเป็นส่วนหนึ่งกับเรา
          สามารถติดต่อได้ผ่านช่องทางด้านล่างนี้
        </p>

        <ul class="list-unstyled fs-5">
          <li class="mb-2">
            <i class="bi bi-geo-alt text-danger me-2"></i>
            123 ถนนความรู้ เขตการศึกษา กรุงเทพฯ
          </li>
          <li class="mb-2">
            <i class="bi bi-telephone text-success me-2"></i>
            02-123-4567
          </li>
          <li class="mb-2">
            <i class="bi bi-envelope text-warning me-2"></i>
            contact@NTLearn.com
          </li>
        </ul>

        <div class="mt-4 d-flex justify-content-center">
          <a href="https://web.facebook.com/sheneverlovedus0" target="_blank" class="me-3">
            <i class="pi pi-facebook" style="font-size: 2rem; color: #3b5998;"></i>
          </a>
          <a href="mailto:contact@NTEdu.com" class="me-3">
            <i class="pi pi-envelope" style="font-size: 2rem; color: #D44638;"></i>
          </a>
          <a href="https://www.instagram.com/chx_not" target="_blank">
            <i class="pi pi-instagram" style="font-size: 2rem; color: #E1306C;"></i>
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'


const name = ref('')
const email = ref('')
const message = ref('')

function send() {
  Swal.fire({
    icon: 'success',
    title: 'ส่งข้อความเรียบร้อย!',
    text: 'เราจะติดต่อกลับโดยเร็วที่สุด 😊',
    confirmButtonColor: '#0d6efd'
  })

  // เคลียร์ฟอร์ม
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.card {
  border-radius: 1rem;
  background-color: #ffffff;
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.list-unstyled li i {
  font-size: 1.2rem;
  vertical-align: middle;
}
</style>
