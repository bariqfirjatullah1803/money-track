function formatDateTime(dateTimeString) {
    // Parse the date string into a Date object
    const date = new Date(dateTimeString);

    // Format the date according to the desired format
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }) + " " + date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return formattedDate;
}

export {formatDateTime}
