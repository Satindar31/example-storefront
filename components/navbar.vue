<template>
    <header class="m-auto">
        <nav>
            <ul
                class="flex flex-row justify-between bg-white border-zinc-300 border-0 w-2/3 ml-auto mr-auto p-6 rounded-md shadow-sm duration-75 hover:shadow">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <div>
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped></style>