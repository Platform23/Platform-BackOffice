export const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = response.status === 422 ? errorData.messages[0].message : errorData.message;
        throw new Error(errorMessage);
    }
    return response.json();
};

export const formatTime = (timeString) => {
    const date = new Date(timeString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
};