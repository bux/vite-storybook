import RegistrationFormComponent from "../../components/Registration/RegistrationForm.vue"

export default {
    title: "User/Actions/Registration/Form",
    component: RegistrationFormComponent,
}

type myArgs = {
    test: number
}

const Template = (args: myArgs) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { RegistrationForm: RegistrationFormComponent },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args }
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<RegistrationForm v-bind="args" />',
})

export const Form = Template.bind({})
