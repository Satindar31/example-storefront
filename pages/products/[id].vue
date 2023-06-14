<template>
    <div class="overflow-hidden overflow-x-hidden overflow-y-hidden">
        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>

const { id } = useRoute().params
const { data: product } = await useFetch('https://fakestoreapi.com/products/' + id, { key: id })
</script>

<style scoped></style>