<template>
    <Card v-for="cardData in data" :key="cardData.id" :data="cardData" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import Card from "./Card.vue"
import CardData from "../interfaces/CardData"

export default defineComponent({
    components: {
        Card,
    },
    props: {
        data: {
            type: Array as PropType<CardData[]>,
            default: () => {
                return []
            },
        },
    },
    setup() {
        const test = ""
        return {
            test,
        }
    },
})
</script>
