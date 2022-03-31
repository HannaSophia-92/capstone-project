export default function FutureTripCard({ trip }) {
  return (
    <section>
      <p>{trip.destination}</p>
      <p>{trip.date}</p>
    </section>
  );
}
