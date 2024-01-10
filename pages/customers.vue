<template>
    <section class="flex mobile:flex-col mobile:gap-y-5 mt-32 gap-x-5 px-10">
        <table class="w-full bg-white text-green rounded-md overflow-hidden self-start">
            <thead>
                <tr class="text-left bg-green-soft text-white overflow-hidden">
                    <th class="py-2 px-4 border-b">Voornaam</th>
                    <th class="py-2 px-4 border-b">Achternaam</th>
                    <th class="py-2 px-4 border-b">Telefoon</th>
                    <th class="py-2 px-4 border-b">Email</th>
                    <th class="py-2 px-4 border-b">Notitie</th>
                    <th class="py-2 px-4 border-b">Acties</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <td class="py-2 px-4 border-b">
                        {{ customer.firstName }}
                    </td>
                    <td class="py-2 px-4 border-b">
                        {{ customer.lastName }}
                    </td>
                    <td class="py-2 px-4 border-b rounded-br">
                        {{ customer.tel }}
                    </td>
                    <td class="py-2 px-4 border-b rounded-br">
                        {{ customer.email }}
                    </td>
                    <td class="py-2 px-4 border-b rounded-br">
                        {{ customer.note }}
                    </td>
                    <td class="py-2 px-4 border-b">
                        <UiIcon
                            @click="deleteCustomer(customer)"
                            name="material-symbols:delete-outline"
                            class="icon h-6 w-6 flex text-green cursor-pointer justify-end cursor-closed hover:scale-110 transition translate ease-in-out"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <aside class="flex flex-col gap-y-5 tablet:w-2/5">
            <UiCollapse title="Klant toevoegen" :collapsed="false">
                <FormAddCustomer />
            </UiCollapse>
        </aside>
    </section>
</template>

<script setup>
const customers = ref([]);
const client = useSupabaseClient();

const props = defineProps({
    customer: Object,
});

const fetchCustomers = async () => {
    try {
        const { data } = await client
            .from("customer")
            .select("id, firstName, lastName, tel, email, note");
        customers.value = data || [];
    } catch (error) {
        console.error("Error loading customers:", error);
    }
};

onMounted(() => {
    fetchCustomers();
});

const deleteCustomer = async (customer) => {
    try {
        const { data, error } = await client
            .from("customer")
            .delete()
            .eq("id", customer.id);

        if (error) {
            console.error("Error deleting customer:", error);
        } else {
            console.log("Customer deleted:", data);
            location.reload();
        }
    } catch (error) {
        console.error("Error deleting customer:", error);
    }
};
</script>
