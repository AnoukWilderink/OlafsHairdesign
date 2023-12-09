export const capitalizeFirstLetter = inputString => {
    if (inputString.length === 0) {
      return inputString;
    }
    
    return `${inputString.charAt(0).toUpperCase()}${inputString.slice(1)}`;
};