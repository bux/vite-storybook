<template>
    <Layout>
        <template #title>
            <h1 class="text-8xl font-bold leading-none" style="font-family: 'Brush Script MT'">Breweries</h1>
        </template>
        <template #actions>
            <Button @click="getBreweries" :disabled="hasFetchedData">Get me some breweries</Button>
        </template>
        <template #results>
            <CardList :data="breweries" />
        </template>
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Layout from "./components/Layout.vue"
import CardList from "./components/CardList.vue"
import Button from "./components/Button.vue"

import { useBreweries } from "./composables/useBreweries"

export default defineComponent({
    name: "App",
    components: {
        Layout,
        Button,
        CardList,
    },
    setup() {
        const { hasFetchedData, breweries, getBreweries } = useBreweries()
        return {
            hasFetchedData,
            breweries,
            getBreweries,
        }
    },
})
</script>
