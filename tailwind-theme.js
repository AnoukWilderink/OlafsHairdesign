export default {
    global: {
      outer: 'mt-2',
      label: 'text-lg font-bold text-green mb-2',
      input: 'border border-green w-full p-3 rounded-md text-green',
      wrapper: 'space-y-2',
      message: 'text-red'
    },
    'family:button': {
      input:
        '$reset inline-flex items-center bg-green text-white text-sm font-bold py-3 px-6 rounded focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin',
    },
    color: {
      input: '$reset',
    }
  }