let db;

const request = indexedDB.open("budget", 1);

request.onsuccess = (event) => {
    db = event.target.result;
    if (navigator.online) {
        checkDatabase();
    }
};

request.onerror = (event) => {
    console.log(event.target.errorCode);
};

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};



window.addEventListener("online", checkDatabase);