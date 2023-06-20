<template>
    <div class="p-6">
        <navbar />
        <div>
            <slot />
        </div>
    </div>
    <Script :src="tidioURL" />
</template>

<script setup>
const tidioURL = useRuntimeConfig().public.TIDIO_URL
console.log(tidioURL)
</script>

<style scoped></style>