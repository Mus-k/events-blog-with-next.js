import { useRouter } from "next/router";
import { getFilteredEvents } from "../../event-data.JS";
import { Fragment } from "react";
import EventList from "@/components/events/eventList";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
function FilteredEvents() {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);
  if (!filterData) {
    return (
      <p className="center" style={{ textAlign: "center", marginTop: "100px" }}>
        Loading....
      </p>
    );
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p style={{ textAlign: "center", marginTop: "100px" }}>
            Invalid search. Please adjust your search!
          </p>
        </ErrorAlert>

        {/* <div className="center" style={{ textAlign: "center" }}>
          <Button link="/events">Show All Events</Button>
        </div> */}
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p style={{ textAlign: "center", marginTop: "100px" }}>
            No events found for the chosen date!
          </p>
        </ErrorAlert>
        {/* <div className="center" style={{ textAlign: "center" }}>
          <Button href="/events">filter Events</Button>
        </div> */}
      </Fragment>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEvents;
