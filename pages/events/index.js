import EventList from "@/components/events/eventList";
//import { useRouter } from "next/router";
import { useRouter } from "next/router";
import { getAllEvents } from "../../event-data.JS";
import EventSearch from "@/components/events/eventSearch";
import Footer from "@/components/events/footer";
function AllEvents() {
  const router = useRouter();

  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
      <Footer/>
    </div>
  );
}

export default AllEvents;
