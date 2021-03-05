<template>
    <Registration />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Registration from "./components/Registration/Registration.vue"

export default defineComponent({
    name: "App",
    components: {
        Registration,
    },
})
</script>
