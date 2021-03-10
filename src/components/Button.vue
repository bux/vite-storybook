<template>
    <button
        type="button"
        class="bg-white border border-gray-700 text-gray-700 rounded-md px-4 py-2 transition duration-300 ease-in-out select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed disabled:text-gray-700 disabled:bg-white"
        @click.prevent="emitClick"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
    props: {
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
    },
    emits: ["click"],
    setup(props, ctx) {
        const emitClick = () => {
            ctx.emit("click")
        }
        return {
            emitClick,
        }
    },
})
</script>
