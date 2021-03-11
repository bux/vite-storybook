<template>
    <div class="w-full max-w-sm overflow-hidden rounded border bg-white shadow">
        <a class="block transition-opacity hover:opacity-90" :href="data.url">
            <img class="object-cover h-48 w-full" :src="data.image" :alt="data.title" loading="lazy" />
        </a>
        <div class="p-3">
            <h3>
                <a class="hover:text-yellow-700" :href="data.url">{{ data.title }}</a>
            </h3>
            <div class="text-xs text-gray-500">
                <p>{{ data.location }}</p>
                <p>{{ date }}</p>
                <p v-if="data.rating">
                    <span v-for="i in data.rating" :key="i">⭐</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue"
import CardData from "../interfaces/CardData"

export default defineComponent({
    props: {
        data: {
            type: Object as PropType<CardData>,
            required: true,
        },
    },
    setup(props) {
        const date = computed(() => props.data.date.toLocaleDateString())
        return {
            date,
        }
    },
})
</script>
