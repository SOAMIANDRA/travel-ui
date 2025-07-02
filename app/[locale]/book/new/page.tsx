import FormBook from '@/components/FormBook';
import prisma from '@/lib/prisma';

async function page() {
  const offers = await prisma.offer.findMany();
  const destinations = await prisma.destination.findMany();

  return <FormBook offers={offers} destinations={destinations} />;
}

export default page