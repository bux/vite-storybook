<template>
    <Layout>
        <template #actions>
            <button
                type="button"
                class="border border-gray-700 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                @click.prevent="getBreweries"
            >
                Get me some breweries
            </button>
        </template>
        <template #results>
            <CardList :data="breweries" />
        </template>
    </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue"
import Layout from "./components/Layout.vue"
import CardList from "./components/CardList.vue"
import Brewery from "./interfaces/Brewery"
import CardData from "./interfaces/CardData"

interface State {
    breweries: Brewery[]
}

export default defineComponent({
    name: "App",
    components: {
        Layout,
        CardList,
    },
    setup() {
        const state: State = reactive({
            breweries: [],
        })
        const getBreweries = async () => {
            const response = await fetch("https://jo-demo-api.netlify.app/.netlify/functions/breweries")
            const data: Brewery[] = await response.json()
            state.breweries = data
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
            breweries,
            getBreweries,
        }
    },
})
</script>
