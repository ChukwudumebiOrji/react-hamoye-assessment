import { users } from "./assets/mock-db"
import { IUser } from "./types/user"

export const getFlightDataUrl = () => {
  var currentTime = Math.floor(Date.now() / 1000) // Get current time in Unix format
  var twoHoursAgo = currentTime - 2 * 60 * 60 // Calculate timestamp for two hours ago
  return `https://opensky-network.org/api/flights/all?begin=${twoHoursAgo}&end=${currentTime}` // Construct URL for retrieving flight data within the specified time range
}

export const formatFlightObject = (flightObj: any, id: number) => {
  var airport = flightObj.estArrivalAirport || flightObj.estDepartureAirport // Extract airport information from either estimated arrival or departure airport
  var currentTime = new Date().toLocaleTimeString() // Get current time as localized string
  var departureTime = new Date(flightObj.firstSeen * 1000).toLocaleTimeString() // Convert firstSeen timestamp to localized departure time
  var arrivalTime = flightObj.lastSeen
    ? new Date(flightObj.lastSeen * 1000).toLocaleTimeString()
    : "N/A" // Convert lastSeen timestamp to localized arrival time if available; otherwise, set as "N/A"
  var formattedObj = { airport, currentTime, arrivalTime, departureTime, id } // Combine extracted information into a formatted object
  return formattedObj // Return the formatted object
}
