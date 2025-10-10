import { toast } from "react-toastify";

const getStoredApps = () => {
   const storedAppSTR = localStorage.getItem('installedAppsList');
   if (storedAppSTR) {
     const storeAppsData = JSON.parse(storedAppSTR);
     return storeAppsData.map(id => parseInt(id));
   }
   else{
        return [];
   }
}
const addToStoredDB = (id) => {
    const storeAppsData = getStoredApps();
     const numericId = parseInt(id);
    if (storeAppsData.includes(numericId)) {
         toast.warning('App already installed');
    }
    else{
        storeAppsData.push(numericId);
        localStorage.setItem('installedAppsList', JSON.stringify(storeAppsData));
        toast.success('App installed successfully!');
    }

}
const removeFromStoredDB = (id) => {
    const storeAppsData = getStoredApps();
    const numericId = parseInt(id);
    
   
    const updatedApps = storeAppsData.filter(appId => appId !== numericId);
    localStorage.setItem('installedAppsList', JSON.stringify(updatedApps));
    toast.success('App uninstalled successfully!');
}
export { addToStoredDB,getStoredApps,removeFromStoredDB };