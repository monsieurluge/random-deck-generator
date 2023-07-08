<template>
    <button @click="emit('click')">
        <svg baseProfile="full" viewBox="0 0 420 420" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M210,60 A150,150 0 0,0 60,210 A150,150 0 0,0 210,360 A150,150 0 0,0 360,210 L360,210 L360,135 L285,210 " style="stroke-width: 47px; stroke-linecap: square; stroke-linejoin: round; stroke: currentColor; fill: none;"/>
        </svg>
    </button>
</template>

<script setup lang="ts">
    const emit = defineEmits(['click'])
</script>

<style scoped lang="css">
    button {
        height: 34px;
        padding: 0;
        border: none;
        background-color: transparent;
    }

    button svg {
        width: 34px;
        height: 34px;
        color: #c9c6c1;
        transition: color 0.3s;
    }

    button:hover svg {
        color: #fcb628;
    }

    button:active {
        padding-top: 2px;
    }
</style>
