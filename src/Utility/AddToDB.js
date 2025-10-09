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
    if (storeAppsData.includes(id)) {
         alert('App already installed');
    }
    else{
        storeAppsData.push(id);
        localStorage.setItem('installedAppsList', JSON.stringify(storeAppsData));
        alert('App installed successfully!');
    }

}
export { addToStoredDB,getStoredApps };