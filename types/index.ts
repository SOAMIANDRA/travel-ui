export interface Destination {
    id:number,
    name:string
}

export interface Offer {
    id:number,
    name:string,
    description:string,
    dailyPrice:number
}

export interface Reservation {
    id:number,
    firstname:string,
    email:string,
    arrivalDate:Date,
    departureDate:Date,
    passengersNumber:number,
    transactionID:string,
    prefferedOffer:Offer,
    destination:Destination,
    descriptionTrip:string,
    createdAt:Date
}