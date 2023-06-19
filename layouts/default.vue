<template>
    <div class="p-6">
        <navbar />
        <div>
            <slot />
        </div>
    <Script :src="tidioURL" />
    </div>
</template>

<script setup>
const tidioURL = useRuntimeConfig().public.TIDIO_URL
console.log(tidioURL)
</script>

<style scoped>

</style>