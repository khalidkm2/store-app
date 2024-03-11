import { useEffect } from "react"


export const useCustomLocation = () => {
    function   getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            // Handle the location data as needed
          },
          (error) => {
            console.error("Error getting location:", error.message);
            // Handle errors (e.g., user denied permission)
          }
        );
      }
  
      

    useEffect(()=> {
        
        if (navigator.geolocation) {
            navigator.permissions.query({ name: "geolocation" }).then((result) => {
              if (result.state === "granted") {
                // We have permission to access location
                getCurrentPosition();
              } else if (result.state === "prompt") {
                console.log("inside prompt");
                // User will get a popup asking for permission
                
                // Handle accordingly
              } else if (result.state === "denied") {
                // User denied sharing location
                // Provide instructions on enabling location permission
              }
            });
          }
        
        
    },[])



}