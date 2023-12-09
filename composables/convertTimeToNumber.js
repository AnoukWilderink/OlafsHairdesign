export const convertTimeNumber = timeString => {
        const timeArray = timeString.split(':');
        const decimalMinutes = parseInt(timeArray[1]) / 60;
        return parseFloat(timeArray[0]) + decimalMinutes;

}