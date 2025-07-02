"use server"
import { IReservation } from "@/types";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function postReservation(dataReservation : IReservation) {
        
    await prisma.reservation.create({
        data: {
          firstname: dataReservation.firstname,
          lastname: dataReservation.lastname,
          arrivalDate: dataReservation.arrivalDate,
          departureDate: dataReservation.departureDate,
          descriptionTrip: dataReservation.descriptionTrip,
          email: dataReservation.email,
          passengersNumber: dataReservation.passengersNumber,
          transactionID: dataReservation.transactionID,
          destination: {
            connect: {
              id: dataReservation.destinationId, // 👈 ID du modèle Destination
            },
          },
          prefferedOffer: {
            connect: {
              id: dataReservation.prefferedOfferId, // 👈 ID du modèle Offer
            },
          },
        },
      });
}