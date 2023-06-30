function filterEventsHelper(events, filter) {
  var filteredEvents = [];

  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    var matchFilters = true;

    for (var key in filters) {
      if (event[key] !== filters[key]) {
        matchFilters = false;
        break;
      }
    }

    if (matchFilters) {
      filteredEvents.push(event);
    }
  }

  return filteredEvents;
}

export default filterEventsHelper;
