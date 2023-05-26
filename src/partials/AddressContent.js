function AddressContent(props) {
  return (
    <div className="main_address_container">
      {props.title.length > 0 && <div className="h4">{props.title}</div>}
      <div className="row address">
        <div className="col-lg-8 content_block">
          <span className="location_name">{props.location_name}</span>
          <span className="address_one">{props.address_one}</span>
          <span className="address_two">{props.address_two}</span>
          <span className="address_city">
            {props.city}, {props.state} {props.zip}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddressContent;
