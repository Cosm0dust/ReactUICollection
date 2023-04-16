export const formatDate = (date: Date): string => {
    let dd: string | number = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm: string | number = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy: string | number = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
};

// @ts-ignore
export const errorMessage = (error: FetchBaseQueryError | SerializedError): string => {
    if ('status' in error && 'data' in error) {
        return `Error: ${error.status} - ${JSON.stringify(error.data)}`;
    } else if ('message' in error) {
        return `Error: ${error.message}`;
    } else {
        return 'An unknown error occurred.';
    }
};