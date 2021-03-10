<template>
    <Card />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Card from "./components/sample/Card.vue"

export default defineComponent({
    name: "App",
    components: {
        Card,
    },
})
</script>
