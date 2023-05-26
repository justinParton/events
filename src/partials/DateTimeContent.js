function DateTimeContent(props) {
  return (
    <section>
      <div className="main_address_container">
        {props.title.length > 0 && <div className="h4">{props.title}</div>}
        <div className="row address">
          <div className="col-lg-8 content_block">
            <span className="location_name">{props.date}</span>
            <span className="address_one">{props.time}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DateTimeContent;
