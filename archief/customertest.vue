<template>
    <div>
        <h1>Customer List</h1>
        <ul>
            <li v-for="customer in customers" :key="customer.id">
                {{ customer.name + " " + customer.phone + "" + customer.email }}
            </li>
        </ul>
    </div>

    <form @submit.prevent="addCustomer" class="text-black">
        <input v-model="newCustomer.name" type="text" placeholder="Naam" />
        <input
            v-model="newCustomer.phone"
            type="text"
            placeholder="Telefoonnummer"
        />
        <input v-model="newCustomer.email" type="text" placeholder="Email" />
        <button type="submit">Klant toevoegen</button>
    </form>
</template>

<script>
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

export default defineComponent({
    setup() {
        const customers = ref([]);

        onMounted(async () => {
            const db = getFirestore(app);
            const customersCollection = collection(db, "customers");

            try {
                const querySnapshot = await getDocs(customersCollection);
                querySnapshot.forEach((doc) => {
                    customers.value.push({ id: doc.id, ...doc.data() });
                });
                console.log(customers.value); // Check if data is fetched
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        });

        return {
            customers,
        };
    },

    data() {
        return {
            newCustomer: {
                name: "",
                phone: "",
                email: "",
            },
        };
    },

    methods: {
        async addCustomer() {
            const db = getFirestore();
            const customersCollection = collection(db, "customers");

            try {
                const { name, phone, email } = this.newCustomer;

                const newCustomer = {
                    name,
                    phone,
                    email,
                    // Voeg andere velden toe zoals nodig
                };

                const docRef = await addDoc(customersCollection, newCustomer);
                console.log("Klant toegevoegd met ID: ", docRef.id);

                // Wis de invoervelden na toevoegen
                this.newCustomer.name = "";
                this.newCustomer.phone = "";
                this.newCustomer.email = "";
            } catch (error) {
                console.error("Fout bij het toevoegen van de klant:", error);
            }
        },
    },
});
</script>
