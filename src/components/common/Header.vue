<template>
    <div class="container mx-auto h-[50px] flex items-center">
        <div class="flex flex-col justify-between h-2.5 cursor-pointer" @click="openMenu">
            <span class="w-[18px] h-[2px] bg-gray-500" :key="item" v-for="item in 3"></span>
        </div>
        <div class="flex justify-evenly w-full">
            <a href="/">Home</a>
            <a href="/about/">About</a>
            <a href="/blog/">Blog</a>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "Header"
    });
</script>

<script setup lang="ts">
    function openMenu () {
        console.log("open menu");
    }
</script>

<style></style>