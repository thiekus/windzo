<template>
    <!-- App -->
    <div class="flex bg-gray-50 font-lexend dark:bg-gray-900">
        <div
            v-if="!$route.meta.hideNav"
            class="lg:block"
            :class="{ 'lg:block hidden': !sidebar, block: sidebar }"
        >
            <div
                class="lg:flex-auto w-sidebar bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 lg:z-0 z-20 overflow-auto lg:relative fixed"
            >
                <perfect-scrollbar class="h-screen">
                    <Sidebar
                        v-if="!$route.meta.hideNav"
                        @sidebarToggle="close"
                    />
                    <!-- <sidebarlist
            v-if="!$route.meta.hideNav"
            @sidebarToggle="close"
          /> -->
                </perfect-scrollbar>
            </div>
        </div>

        <div
            class="flex-auto w-full overflow-auto h-screen transition-colors"
            id="body-scroll"
        >
            <Header v-if="!$route.meta.hideNav" @sidebarToggle="open" />

            <transition name="slide-up" mode="out-in">
                <router-view />
            </transition>
            <Footer v-if="!$route.meta.hideNav" />
        </div>
    </div>
    <!-- End app -->
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
// Vue components
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// npm-js
import Scrollbar from 'smooth-scrollbar'

const route = useRoute()
const sidebarDark = ref(false)
const sidebar = ref(false)

const open = () => {
    sidebar.value = true
}

const close = () => {
    sidebar.value = false
}

onMounted(() => {
    Scrollbar.init(document.querySelector('#body-scroll'))
})

watch(route, () => {
    sidebar.value = false
})
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-up-enter-active {
    transition: all 0.3s ease-out;
}

.slide-up-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>
