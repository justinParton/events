function EventInfo() {
  return (
    <>
      <hr />
      <div id="paymentSelector" className="form-group p-4">
        <label className="font-weight-bold">Subtotal</label>
        <div id="Ratessubtotal" className="ml-2 mb-2">
          <div className="row">
            <div className="col">
              <span className="">INSERT TYPE HERE</span>
            </div>
            <div className="col text-right">
              <span>INSERT AMOUNT HERE</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className=""></span>
            </div>
            <div className="col text-right">
              <span>Total: INSERT AMOUNT HERE</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default EventInfo;
