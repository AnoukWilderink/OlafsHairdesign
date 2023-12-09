<template>
    <div class="grid grid-cols-1 custom-grid-login relative">
        <Logo />

        <div class=" h-screen justify-self-center ">
            <div class="flex flex-col justify-start  tablet:pt-16  h-full w-full">
                <h2 class="h2 mb-10">Persoonlijke gegevens</h2>
                <img src="../assets/manhaircut.png" class="rounded-full mx-auto h-72 w-72 object-cover mb-10">
                <form class="flex flex-col">
                    <label>Naam</label>
                    <input class="input_c" type="text" placeholder="John Doe" value="John Doe"> 
                    <label>Telefoon</label>
                    <input class="input_c" type="text" placeholder="0612345678" value="0612345678">
                    <label>Email</label>
                    <input class="input_c" type="text" placeholder="johndoe@gmail.com" value="johndoe@gmail.com">
                    <label>Voorkeurs kapper</label>
                    <input class="input_c" type="text" placeholder="Olaf" value="Olaf">
                    <button class="btn2 desktop:mt-32">Wijzig gegevens</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import Logo from "../components/Logo.vue";

export default {
    components: {
        LoginForm,
        RegisterForm,
    },
    data() {
        return {
            activeForm: "",
            showForm: false,
            hideBtns: true,
        };
    },
    methods: {
        showLoginForm() {
            this.activeForm = "LoginForm";
            this.showForm = true;
            this.hideBtns = false;
        },
        showRegisterForm() {
            this.activeForm = "RegisterForm";
            this.showForm = true;
            this.hideBtns = false;
        },
    },
};
</script>

<style>
label{
    font-size: 18px;
}

.input_c{
    margin-bottom:50px;
    padding: 10px 5px 0 0;
    background-color: var(--color-green);
    font-weight: bold;
    font-size: 18px;
    color: white;
    border-bottom: 1px solid var(--color-green-soft);
}
</style>
