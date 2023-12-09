import { DateTime } from 'luxon';

export default defineNuxtPlugin(nuxtApp => {
    DateTime.defaultLocale = 'nl';
})