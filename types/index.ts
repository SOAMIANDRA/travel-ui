export interface Destination {
    name:string
}

export interface Offer {
    name:string,
    description:string,
    dailyPrice:number
}

export interface IReservation {
    firstname:string,
    lastname:string,
    email:string,
    arrivalDate:Date,
    departureDate:Date,
    passengersNumber:number,
    transactionID:string,
    prefferedOfferId:number,
    destinationId:number,
    descriptionTrip:string
}