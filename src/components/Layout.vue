<template>
    <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div
            class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left"
        >
            <div class="">
                <slot name="actions" />
            </div>
            <div class="results">
                <slot name="results" />
            </div>
        </div>
    </div>
</template>
