<template>
  <div class="container my-5">
    <!-- ส่วนหัว -->
    <section
      class="p-5 mb-5 rounded text-center text-white shadow-lg position-relative overflow-hidden"
      style="background: linear-gradient(135deg, #0d6efd, #6610f2);"
    >
      <div class="position-relative" style="z-index: 2;">
        <h1 class="display-5 fw-bold mb-3">
          <i class="bi bi-info-circle-fill me-2"></i>เกี่ยวกับ
          <span class="text-warning">NTLearn</span>
        </h1>
        <p class="lead mb-0">
          แหล่งรวมบทความ ความรู้ และคอร์สสั้น ๆ ที่อ่านเข้าใจง่าย เหมาะกับทุกคนที่อยากเริ่มต้นเรียนรู้
        </p>
      </div>
      <div
        class="position-absolute top-0 start-0 w-100 h-100"
        style="background: rgba(255,255,255,0.05) url('https://www.transparenttextures.com/patterns/cubes.png'); z-index:1;"
      ></div>
    </section>

    <!-- เนื้อหาเกี่ยวกับ -->
    <section class="text-center mb-5">
      <div class="mx-auto" style="max-width: 800px;">
        <h3 class="fw-bold text-primary mb-3">เราเป็นใคร?</h3>
        <p class="text-muted fs-5">
          <strong>NTLearn</strong> เป็นเว็บไซต์ที่มุ่งเน้นการเผยแพร่ความรู้สั้น ๆ
          เข้าใจง่ายในรูปแบบที่เหมาะกับผู้เริ่มต้น
          เราเชื่อว่าการเรียนรู้ไม่ควรซับซ้อนและสามารถเข้าถึงได้ทุกคน ไม่ว่าจะอยู่ที่ไหนก็ตาม
        </p>
        <p class="text-muted fs-6">
          เว็บไซต์นี้สร้างขึ้นโดยทีมพัฒนาที่รักการแบ่งปันความรู้ด้านเทคโนโลยี การออกแบบ และทักษะชีวิต
          เพื่อช่วยให้คุณพัฒนาไปข้างหน้าได้อย่างมั่นใจ 💪
        </p>
      </div>
    </section>

    <!-- ทีมผู้พัฒนา -->
    <section class="text-center">
      <h4 class="fw-bold text-primary mb-4">
        <i class="bi bi-people-fill me-2"></i>ทีมผู้พัฒนา
      </h4>

      <div class="row justify-content-center">
        <div class="col-md-4 col-lg-3 mb-4" v-for="member in team" :key="member.name">
          <div class="card border-0 shadow-sm h-100 hover-card">
            <img
              :src="member.image"
              alt="member"
              class="card-img-top rounded-circle mx-auto mt-4"
              style="width: 120px; height: 120px; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="fw-semibold">{{ member.name }}</h5>
              <p class="text-muted small">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const team = [
  {
    name: 'จักรี',
    role: 'Frontend Developer',
    image: 'https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/475018835_1665499844365793_3595108839761087320_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=A3ziAVacd_QQ7kNvwF8xmYa&_nc_oc=Adlq3a9wwMJ2OqYnH8KCBxMOC9m_oB0fZm_EAhYVCduRishgcB_fLgRM6KZBhZTIJWjCTMHu8-uobL_MT32i_ciz&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=CPcnf04K-BfeEAeQ7-KUZQ&oh=00_AffyjJ1rXQEgVEXNtgEO8z3PmUsuwXxErRs55RyzS1fPJQ&oe=68FCEEFD',
  },
  {
    name: 'คุณานนต์',
    role: 'UI/UX Designer',
    image: 'https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/484073611_1561423638016853_2871079551983758392_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sMk6VnltfbYQ7kNvwG62oFL&_nc_oc=AdkfQU9s9x7bsJWbEGFG3h-EoKhWm_3Jv0R36kGcUKr14AFn-Wq-k3s43RPMPrKWB3_MMuXoN7Mwe4QuE2V5v0Wy&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=EkndccgZQFvM18c9Caz3Sw&oh=00_AfdsNsUU8VVO2XvSm60lNQfyNi8ht3HclKjC0uNhX2eJcg&oe=68FCFA41',
  },
  {
    name: 'ภาณุพร',
    role: 'Backend Developer',
    image: 'https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/339991342_181541541360822_1170375190936992761_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=P0KCw7UWF2QQ7kNvwF11LTG&_nc_oc=Adm-t7KJ-57dXgLBUpcHo4M5waLDIFdRKZe6w23DYEF7k0nQbadAp9FHu3Dq_SMI4SxSb4WKmGzzUpl5ECrh5O5z&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=RqAZE_50SviFTTJ529512w&oh=00_AffoJlXzrnJhBE4QIO_E_qXsG3lSY0nvQqM7ClVx622whw&oe=68FCE115',
  },
]
</script>

<style scoped>
.hover-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.75rem 1.25rem rgba(0, 0, 0, 0.15);
}
</style>
