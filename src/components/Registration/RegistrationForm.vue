<template>
    <form class="mt-6" @submit.prevent="emitSubmit">
        <div>
            <label class="block text-base font-medium leading-relaxed text-gray-700">Kundennummer</label>
            <input
                type="text"
                name=""
                id=""
                placeholder="Ihre Kundennummer"
                class="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
                autofocus
                autocomplete
                required
                v-model="user.debitorId"
            />
        </div>
        <div class="mt-4">
            <label class="block text-base font-medium leading-relaxed text-gray-700">E-Mail Adresse</label>
            <input
                type="email"
                name=""
                id=""
                placeholder="Ihre E-Mail Adresse"
                class="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
                autofocus
                autocomplete
                required
                v-model="user.email"
            />
        </div>
        <div class="flex flex-wrap mt-4 mb-6 -mx-3">
            <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label class="text-base font-medium leading-relaxed text-gray-700" for="password" minlength="6">
                    Passwort
                </label>
                <input
                    class="block w-full px-4 py-2 mt-2 text-base text-gray-700 transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
                    id="password"
                    type="text"
                    placeholder="Ihr Passwort"
                    v-model="user.password"
                />
            </div>
            <div class="w-full px-3 md:w-1/2">
                <label class="text-base font-medium leading-relaxed text-gray-700" for="confirm"> Wiederholen </label>
                <input
                    class="block w-full px-4 py-2 mt-2 text-base text-gray-700 transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
                    id="confirm"
                    type="text"
                    placeholder="Wiederholen"
                    v-model="user.passwordConfirm"
                />
            </div>
        </div>
        <button
            type="submit"
            class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black"
        >
            Registrieren
        </button>
    </form>
    <p class="mt-8 text-center">
        Sie haben bereits Ihr Kundenkonto aktiviert?
        <a href="#" class="font-semibold text-gray-700 hover:text-gray-700">Login</a>
    </p>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { UserRegistrationModel } from "./UserRegistrationModel"

export default defineComponent({
    emits: ["form-submit"],
    setup(props, ctx) {
        const user: UserRegistrationModel = {
            debitorId: "",
            email: "",
            password: "",
            passwordConfirm: "",
        }
        const emitSubmit = () => {
            console.log("submitting the form")
            ctx.emit("form-submit", user)
        }
        return {
            user,
            emitSubmit,
        }
    },
})
</script>
