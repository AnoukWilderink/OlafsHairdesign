<template>
    <form class="form" @submit.prevent="signUpWithEmail">
        <!-- <label for="email" >-->
        <input
            v-model="email"
            placeholder="Email"
            id="email"
            class="form__input"
            type="email"
            required
        />
        <!-- </label> -->
        <!-- <label for="password"> -->

        <input
            v-model="password"
            placeholder="Wachtwoord"
            id="password"
            type="password"
            class="form__input"
            required
        />
        <!-- </label> -->

        <!-- <label for="password" >-->
        <input
            v-model="confirmPassword"
            placeholder="Bevestig wachtwoord"
            id="confirmPassword"
            type="password"
            class="form__input"
            required
        />
        <!-- </label> -->
        <button type="submit" class="btn2">Create account</button>
        <a class="text-link mt-[-10px]" @click="$emit('showLoginForm1')"
            >or log in</a
        >
    </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
        //Register
        signUpWithEmail() {

            // Check if passwords match
            if (this.password !== this.confirmPassword) {
                // Handle password mismatch error
                console.error("Passwords do not match");
                return;
            }

            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed up successfully
                    const user = userCredential.user;
                    console.log("Account is succesvol aangemaakt", user);
                })
                .catch((error) => {
                    // Handle signup error
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(
                        "Er is een fout opgetreden bij het aanmaken van het account",
                        errorCode,
                        errorMessage,
                        error
                    );

                    alert(
                        "Er is een fout opgetreden bij het aanmaken van het account"
                    );
                });
        },
    },
};

// export default {
//     data() {
//         return {
//             email: "",
//             password: "",
//             confirmPassword: "",
//         };
//     },
//     methods: {
//         // Register
//         async signUpWithEmail() {
//             const email = this.email;
//             const password = this.password;
//             const confirmPassword = this.confirmPassword;

//             if (password !== confirmPassword) {
//                 alert("Passwords do not match");
//                 return;
//             }

//             try {
//                 const userCredential = await createUserWithEmailAndPassword(
//                     auth,
//                     email,
//                     password
//                 );
//                 const user = userCredential.user;
//                 console.log("Account is succesvol aangemaakt");
//                 alert( "gelukt dit mag weg");
//                 // this.$router.push("/");
//             } catch (error) {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.error(
//                     "Er is een fout opgetreden bij het aanmaken van het account",
//                     errorCode,
//                     errorMessage,
//                     error
//                 );
//                 alert(
//                     "Er is een fout opgetreden bij het aanmaken van het account"
//                 );
//             }
//         },
//     },
// };
</script>
