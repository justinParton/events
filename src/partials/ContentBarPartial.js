function ContentBarPartial(props) {
  return (
    <section className="outer">
      <div className="row ms-0 me-0 align-items-start content_bar ">
        <div className="col-sm-12 col-md content_bar_location">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col">
              <span className="h5 fw-bolder">Venue Location</span>
              <span className="location_name">{props.location.name}</span>
              <span className="address_one">{props.location.address_one}</span>
              <span className="address_two">{props.location.address_two}</span>
              <span className="address_city">
                {props.location.city}, {props.location.state}{" "}
                {props.location.zip}
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 content_bar_date">
          <span className="h5 fw-bolder">Event Date</span>
          <span className="date">{props.dateTime.date}</span>
          <span className="time">{props.dateTime.time}</span>
        </div>
        <div className="col content_bar_tickets">
          <span className="h5 fw-bolder">Ticket Info</span>
          <span className="early">
            <strong>Early Bird Tickets: </strong>
            {props.tickets.early}
          </span>
          <span className="general">
            <strong>General Tickets: </strong>
            {props.tickets.general}
          </span>
        </div>
      </div>
      <div className="m-3 row ">
        <div className="col">
          <span className="disclaimer small text-muted">
            {props.tickets.disclaimer}
          </span>
        </div>
      </div>
    </section>
  );
}

export default ContentBarPartial;
