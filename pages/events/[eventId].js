import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../event-data.JS";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";
import Footer from "@/components/events/footer";

function EventDetails() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(event);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />

      <EventLogistics
        date={event.date}
        location={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Footer />
    </Fragment>
  );
}

export default EventDetails;
