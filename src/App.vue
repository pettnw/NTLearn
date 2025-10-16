<template>
    <div>
        <TheNavbar />
        <main class="container my-5">
            <router-view />
            <ScrolltoTop />
        </main>
        <TheFooter />
    </div>
</template>


<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import ScrolltoTop from './components/ScrolltoTop.vue'
</script>