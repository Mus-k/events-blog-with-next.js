import EventList from "@/components/events/eventList";
import { getFeaturedEvents } from "../event-data.JS";

import EventHome from "@/components/events/eventHome";
import Footer from "@/components/events/footer";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventHome />
    
      <EventList items={featuredEvents} />
    <Footer/>
    </div>
  );
}
export default HomePage;
