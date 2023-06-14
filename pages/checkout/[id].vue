<template>
    <div>
        <p>Checking out with product id {{ id }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data } = await useFetch('/api/checkout/' + id, {
    method: 'POST',
    body: {
        id: id
    }
})
// console.log(data.value.data)
</script>

<style scoped></style>