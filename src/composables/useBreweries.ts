import { computed, reactive, ref } from "vue"
import Brewery from "../interfaces/Brewery"
import CardData from "../interfaces/CardData"

interface State {
    breweries: Brewery[]
}

export const useBreweries = () => {
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
                image: item.image_url,
                location: `${item.city}, ${item.state}`,
                date: new Date(item.created_at),
                url: item.website_url,
                rating: item.rating,
            }
        })
    }

    const breweries = computed(() => adaptBreweriesToCardData(state.breweries))

    return {
        hasFetchedData,
        breweries,
        getBreweries,
    }
}
