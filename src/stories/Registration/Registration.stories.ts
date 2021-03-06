import RegistrationComponent from "../../components/Registration/Registration.vue"

export default {
    title: "User/Actions/Registration/Registration",
    component: RegistrationComponent,
}

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Registration: RegistrationComponent },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args }
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<Registration v-bind="args" />',
})

export const Registration = Template.bind({})
