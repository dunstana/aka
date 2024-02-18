import CryptoJS from 'crypto-js'

const secretKey = "3GVUGACq2OHtRKs4pgq0r142McQbrGrEwy"
export const encryptText =  (text)=>{
    let encryptedText =  CryptoJS.AES.encrypt(text.toString(), secretKey).toString();
    encryptedText = encryptedText.replace('/','cht')
    return encryptedText;
}

export const decryptText =  (text)=>{
    if(text === null)
    {
        return;
    }
    let urlEncrypted = text.replace('cht','/')
    const bytes =  CryptoJS.AES.decrypt(urlEncrypted, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export const authTokenConfig = {


    headers:{
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer '+ localStorage.getItem('kn') ? decryptText(localStorage.getItem('kn')) : ''
    }
}

export const convertDateToLocalTimezoneHuman = (timestamp) => {
    const timezoneOffset = -(new Date().getTimezoneOffset());
    const timestampString = timestamp.toString();

    // Convert the timestamp string to a JavaScript Date object
    const dateObject = new Date(
        parseInt(timestampString.substring(0, 4)), // Year
        parseInt(timestampString.substring(4, 6)) - 1,
        parseInt(timestampString.substring(6, 8)), // Day
    );

    const convertedDate = new Date(dateObject.getTime() + (timezoneOffset * 60 * 1000));

    // Format the Date object to "DD MON, YYYY"
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return convertedDate.toLocaleString(undefined, options);
}

export const searchableQuery = (payload) => {
    let search_query = "";
    let count = 0;
    let starter = ''


    // Check if payload is defined and is an object
    if (typeof payload === 'object' && payload !== null) {
        Object.entries(payload).forEach(([key, value]) => {
            if (count === 0) {
                if(value !== null) {
                    search_query += '?' + key + '=' + value;
                    starter = 's'
                }
            } else {
                if(value !== null) {
                    if(starter === '')
                    {
                        starter = 's'
                        search_query += '?' + key + '=' + value;
                    }else{
                        search_query += '&' + key + '=' + value;
                    }
                }
            }
            count++;
        });
    }

    return search_query;
};

export const  convertDateFormat_to_Ymd = (inputDate) =>{
    // Parse the input date
    const parsedDate = new Date(inputDate);

    // Get the year, month, and day
    const year = parsedDate.getFullYear();
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = parsedDate.getDate().toString().padStart(2, '0');

    // Form the new date string in "Y-m-d" format
    return `${year}-${month}-${day}`;
}

export const getDateCustomDaysBehind = (daysBehind = 0) => {
    // Get the current date
    const currentDate = new Date();

    // Calculate the date seven days behind
    const sevenDaysBehind = new Date(currentDate);
    sevenDaysBehind.setDate(currentDate.getDate() - daysBehind);

    // Format the date as "yyyy-mm-dd"
    return sevenDaysBehind.toISOString().split('T')[0];
}

export const getStartOfMonth = () => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const formattedDate = startOfMonth.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    return formattedDate;
}

export const getEndOfMonth = () => {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); // 0th day of next month is the last day of current month
    const formattedDate = nextMonth.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    return formattedDate;
}

export const convertToCustomFormat_mjY = (inputDate) => {
    // Parse the input date
    const parsedDate = new Date(inputDate);
    // Define the options for the desired format
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    // Format the date using toLocaleDateString with the specified options
    return parsedDate.toLocaleDateString('en-US', options);
}