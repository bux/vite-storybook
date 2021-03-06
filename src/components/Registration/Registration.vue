<template>
    <section class="flex flex-col items-center h-screen md:flex-row text-gray-700">
        <div class="container mx-auto">
            <div class="flex justify-center px-2 py-6">
                <div class="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl">
                    <div
                        class="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12"
                    >
                        <div class="relative z-10 m-12 text-left">
                            <a class="flex items-center w-32 mb-4 font-medium text-gray-700 title-font md:mb-10">
                                <h2
                                    class="text-lg font-bold tracking-tighter text-gray-700 uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400"
                                >
                                    <img src="../../assets/apetito-logo.svg" alt="Apetito" />
                                </h2>
                            </a>
                            <h2
                                class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-gray-700 sm:text-3xl title-font"
                            >
                                Sie sind neu bei apetito?
                            </h2>
                            <div
                                class="w-full mt-16 mb-8 text-base leading-relaxed text-gray-700 sm:md:w-3/3 lg:text-1xl"
                            >
                                Aktivieren Sie einmalig Ihr Kundenkonto, um apetito zu nutzen.
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full px-8 py-24 bg-white border-gray-100 rounded-lg lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s"
                    >
                        <div class="relative z-10 text-left">
                            <div class="flex justify-enter lg:py-6">
                                <button
                                    type="button"
                                    class="inline-flex w-full px-4 py-3 font-semibold text-gray-700 transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-lg hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                                >
                                    <div class="flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            class="w-6 h-6"
                                            viewBox="0 0 48 48"
                                        >
                                            <defs>
                                                <path
                                                    id="a"
                                                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                                />
                                            </defs>
                                            <clipPath id="b">
                                                <use xlink:href="#a" overflow="visible" />
                                            </clipPath>
                                            <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                            <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                            <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                            <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                        </svg>
                                        <span class="ml-4"> Mit Google anmelden </span>
                                    </div>
                                </button>
                            </div>
                            <RegistrationForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import RegistrationForm from "./RegistrationForm.vue"

export default defineComponent({
    components: {
        RegistrationForm,
    },
    setup() {
        const registerUser = () => {
            console.log("Register User")
        }
        return registerUser
    },
})
</script>
