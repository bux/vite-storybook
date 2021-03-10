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
import { computed, defineComponent, reactive, ref } from "vue"
import Layout from "./components/Layout.vue"
import CardList from "./components/CardList.vue"
import Button from "./components/Button.vue"

import Brewery from "./interfaces/Brewery"
import CardData from "./interfaces/CardData"

interface State {
    breweries: Brewery[]
}

export default defineComponent({
    name: "App",
    components: {
        Layout,
        Button,
        CardList,
    },
    setup() {
        const hasFetchedData = ref(false)
        const state: State = reactive({
            breweries: [],
        })
        const getBreweries = async () => {
            const response = await fetch("https://jo-demo-api.netlify.app/.netlify/functions/breweries")
            const data: Brewery[] = await response.json()
            state.breweries = data
            hasFetchedData.value = true
        }

        const adaptBreweriesToCardData = (breweries: Brewery[]): CardData[] => {
            return breweries.map((item) => {
                return {
                    id: item.id,
                    title: item.name,
                    location: `${item.city}, ${item.state}`,
                    date: new Date(item.created_at),
                    url: item.website_url,
                }
            })
        }

        const breweries = computed(() => adaptBreweriesToCardData(state.breweries))

        return {
            hasFetchedData,
            breweries,
            getBreweries,
        }
    },
})
</script>
