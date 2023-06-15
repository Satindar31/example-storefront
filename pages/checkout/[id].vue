<template>
    <div>
        <p>Checking out with product id {{ id }}</p>
    </div>
</template>

<script setup>
// Gets the id from the product.
// For example /checkout/2 will have id of 2
const { id } = useRoute().params
const { data } = await useFetch('/api/checkout/' + id, {
    method: 'POST',
    body: {
        id: id
    }
})
// URL is like `"https://pay.stripe.com/..."` so it is used to remove the extra double quotation marks
const url = data.value.replace('"', '').replace('"', '')

// Redirects to checkout page
await navigateTo(url, {
  external: true
})
</script>

<style scoped></style>