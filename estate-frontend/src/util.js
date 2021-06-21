export default {
    formatCurrency: function (num) {
        return '$' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}
export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }