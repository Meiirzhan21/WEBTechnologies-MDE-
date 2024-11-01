function updateDateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    const formattedDateTime = now.toLocaleString('en-EN', options);
    document.getElementById('dateTime').textContent = formattedDateTime;
}
updateDateTime();
setInterval(updateDateTime, 60000);