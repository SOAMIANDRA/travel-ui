import { Prisma, PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

const destinationData: Prisma.DestinationCreateInput[] = [
    {
        name:'Antsiranana'
    },
    {
        name:'Mahajanga'
    },
    {
        name:'Toamasina'
    },
    {
        name:'Antananarivo'
    },
    {
        name:'Fianarantsoa'
    },
    {
        name:'Toliara'
    },
    {
        name:'Sainte Marie'
    },
    {
        name:'Nosy Be'
    },
];

const offerData: Prisma.OfferCreateInput[] = [
    {
        name: "Basis",
        description: "Für Reisende mit kleinem Budget, grundlegende Leistungen ohne Extras.",
        dailyPrice: 35,
    },
    {
        name: "Komfort",
        description: "Das perfekte Gleichgewicht zwischen Preis und Leistung, inklusive komfortabler Unterkünfte.",
        dailyPrice: 55,
    },
    {
        name: "Premium",
        description: "Für anspruchsvolle Reisende, alles inklusive, mit exklusiven Erlebnissen.",
        dailyPrice: 95,
    },
];

export async function main() {
    for (const d of destinationData) {
        await prisma.destination.create({data:d});
    }
    for (const o of offerData) {
        await prisma.offer.create({ data: o });
    }
}

main();