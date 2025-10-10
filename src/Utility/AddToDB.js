const getStoredApps = () => {
   const storedAppSTR = localStorage.getItem('installedAppsList');
   if (storedAppSTR) {
     const storeAppsData = JSON.parse(storedAppSTR);
     return storeAppsData;
   }
   else{
        return [];
   }
}
const addToStoredDB = (id) => {
    const storeAppsData = getStoredApps();
     const numericId = parseInt(id);
    if (storeAppsData.includes(numericId)) {
         alert('App already installed');
    }
    else{
        storeAppsData.push(numericId);
        localStorage.setItem('installedAppsList', JSON.stringify(storeAppsData));
        alert('App installed successfully!');
    }

}
export { addToStoredDB,getStoredApps };