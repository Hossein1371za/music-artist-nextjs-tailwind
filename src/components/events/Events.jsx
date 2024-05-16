const getEvents = async () => {
  const res = await fetch("http://localhost:4000/events");
  return res.json();
};

const Events = async () => {
    const events = await getEvents()
  return <div>Event</div>;
};

export default Events;
