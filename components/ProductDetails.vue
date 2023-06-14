<template>
    <div class="overflow-hidden overflow-x-hidden overflow-y-hidden">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="Product image" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="my-7 text-4xl">{{ product.title }}</h2>
                <h3 class="my-7 text-xl">${{ product.price }}</h3>
                <h4 class="border-b-2 font-bold mb-4 pb-2">Product description:</h4>
                <p class="mb-7">{{ product.description }}</p>
                <NuxtLink :to="`/checkout/${product.id}`" class="btn">Buy now</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
img {
    max-width: 290px;
}
</style>