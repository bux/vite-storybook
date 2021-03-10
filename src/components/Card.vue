<template>
    <div class="w-full max-w-sm overflow-hidden rounded border bg-white shadow">
        <div class="relative">
            <div
                class="h-48 bg-cover bg-no-repeat bg-center"
                :style="`background-image: url(https://picsum.photos/245/245?v=${data.id})`"
            ></div>
        </div>
        <div class="p-3">
            <h3 class="mr-10 text-sm truncate-2nd">
                <a class="hover:text-blue-500" :href="data.url">{{ data.title }}</a>
            </h3>
            <div class="flex items-start justify-between">
                <p class="text-xs text-gray-500">{{ data.location }}</p>
            </div>
            <p class="text-xs text-gray-500">
                <a href="#" class="hover:underline hover:text-blue-500">{{ data.username }}</a> • {{ date }}
            </p>
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
