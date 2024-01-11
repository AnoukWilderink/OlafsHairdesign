<template>
    <section class="flex mobile:flex-col mobile:gap-y-5 mt-32 gap-x-5 px-10">
        <table class="w-full bg-white text-green rounded-md overflow-hidden self-start">
            <thead>
                <tr class="text-left bg-green-soft text-white overflow-hidden">
                    <th class="py-2 px-4 border-b">Voornaam</th>
                    <th class="py-2 px-4 border-b">Achternaam</th>
                    <th class="py-2 px-4 border-b">Functie</th>
                    <th class="py-2 px-4 border-b">Acties</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hairdresser in hairdressers" :key="hairdresser.id">
                    <td class="py-2 px-4 border-b">
                        {{ hairdresser.firstName }}
                    </td>
                    <td class="py-2 px-4 border-b">
                        {{ hairdresser.lastName }}
                    </td>
                    <td class="py-2 px-4 border-b rounded-br">
                        {{ hairdresser.title }}
                    </td>
                    <td class="py-2 px-4 border-b">
                        <UiIcon
                            @click="deleteHairdresser(hairdresser)"
                            name="material-symbols:delete-outline"
                            class="icon h-6 w-6 flex text-green cursor-pointer justify-end cursor-closed hover:scale-110 transition translate ease-in-out"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <aside class="flex flex-col gap-y-5 tablet:w-2/5">
            <UiCollapse title="Medewerker toevoegen" :collapsed="false">
                <FormAddHairdresser />
            </UiCollapse>
        </aside>
    </section>
</template>

<script setup>
const hairdressers = ref([]);
const client = useSupabaseClient();

const props = defineProps({
    hairdresser: Object,
});

const fetchHairdressers = async () => {
    try {
        const { data } = await client
            .from("hairdresser")
            .select("id, firstName, lastName, title");
        hairdressers.value = data || [];
    } catch (error) {
        console.error("Error loading hairdressers:", error);
    }
};

onMounted(() => {
    fetchHairdressers();
});

const deleteHairdresser = async (hairdresser) => {
    try {
        const { data, error } = await client
        .from("hairdresser")
        .delete()
        .eq("id", hairdresser.id);
        
        if (error) {
            console.error("Error deleting hairdresser:", error);
        } else {
            console.log("Hairdresser deleted:", data);
            location.reload();
        }
    } catch (error) {
        console.error("Error deleting hairdresser:", error);
    }
};
</script>
