<template>
    <div class="card text-center">

        <img :src="product.image" class="thumb">
        <NuxtLink :to="`/products/${product.id}`">
            <h3 class="font-bold text-zinc-500 m-4 truncate">{{ product.title }}</h3>
        </NuxtLink>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>


    </div>
</template>

<script setup>

const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}</style>