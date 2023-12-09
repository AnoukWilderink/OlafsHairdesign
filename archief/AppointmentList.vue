<template>
    <div>
      <h1>Your Appointments</h1>
      <ul>
        <li v-for="appointment in appointments" :key="appointment.id">
          <div>Date: {{ appointment.date }}</div>
          <div>Hairdresser: {{ appointment.hairdresser }}</div>
          <div>Service: {{ appointment.service }}</div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { getAuth } from "firebase/auth";
  import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
  
  export default {
    setup() {
      const auth = getAuth();
      const user = ref(auth.currentUser);
      const appointments = ref([]);
  
      onMounted(() => {
        if (user.value) {
          const db = getFirestore();
          const appointmentsCollection = collection(db, "appointments");
          const userAppointmentsQuery = query(appointmentsCollection, where("userId", "==", user.value.uid));
  
          getDocs(userAppointmentsQuery)
            .then((querySnapshot) => {
              appointments.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            })
            .catch((error) => {
              console.error("Error fetching appointments:", error);
            });
        }
      });
  
      return {
        appointments,
      };
    },
  };
  </script>
  