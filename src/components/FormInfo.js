import { Formik, Form, Field, ErrorMessage } from "formik";

import ContentBarPartial from "../partials/ContentBarPartial";
import RegistrationModal from "../partials/RegistrationModal";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import TotalsPartial from "../partials/TotalsPartial";

function EventInfo() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="eventDetails_main">
        <div className="main_about_title h2">When And Where</div>
        <ContentBarPartial
          location={{
            name: "Sheraton Suites Fort Lauderdale Plantation",
            address_one: "11 North University Drive",
            city: "Plantation",
            state: "Florida",
            zip: "33324",
          }}
          dateTime={{
            date: "Saturday October 21, 2023",
            time: "9am - 4pm EDT",
          }}
          tickets={{
            early: "$223 by July 31st",
            general: "$250 by Aug. 15th",
            disclaimer:
              "**General registration fees are non-refundable and donated to Balafonte Tacolcy Community Center of Miami, FL and Organizations in Fort Lauderdale & Kansas City",
          }}
        />
        <section className="main_about row">
          <div className="col-lg-8 pe-5">
            <div className="main_about_title h2">About This Event</div>
            <div className="about_section_detail_description">
              <div className="main_about_chips"></div>
              <div className="main_about_detail">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada ex sed enim dapibus.
                </p>

                <blockquote className="blockquote text-center">
                  <p className="">
                    Never doubt God's mighty power to work in you and accomplish
                    all this. He will achieve infinitely more than your greatest
                    request, your most unbelievable dream, and exceed your
                    wildest imagination! He will outdo them all, for his
                    miraculous power constantly energizes you.
                  </p>
                  <footer className="blockquote-footer">
                    Ephesians 3:20 <cite title="Source Title">TPT</cite>
                  </footer>
                </blockquote>

                <p>
                  Praesent fringilla euismod quam eget ornare. Aenean luctus
                  porta metus eget egestas. Donec feugiat malesuada felis at
                  vehicula. Etiam ultrices, augue a porta laoreet, mi ligula
                  tincidunt nibh, porta finibus mi nisi vitae odio. Aliquam
                  maximus enim ut nibh fringilla placerat eget vel velit. Donec
                  vitae auctor elit, sit amet blandit eros.
                </p>
              </div>
            </div>

            <div className="about_section_detail_item">
              <h4 className="text-muted">Event Ammenities</h4>
              <p>
                Lunch and Refreshments will be provided; Gifts/prizes will be
                awarded throughout the event by Dr. A & Sponsors
              </p>
            </div>
            <div className="about_section_detail_item">
              <h4 className="text-muted">Hotel Accomodations</h4>
              <p>
                Manifest By Faith has secured a hotel group rate with Sheraton
                Suites Plantation Flort Lauderdale!
                <br /> Contact the hotel at{" "}
                <a href="tel:+19544243300">(954) 424-3300</a> and mention
                "Manifest By Faith Event"
              </p>
            </div>
            <div className="about_section_detail_item">
              <h4 className="text-muted">Sponsorship Opportunities</h4>
              <p>
                Want to be a sponsor and partner with us in reaching our
                communities for Christ? All you need to do is click the sponship
                checkbox during registration, or contact{" "}
                <a href="https://www.instagram.com/adrinneblackstock/">
                  Dr. A on INSTAGRAM
                </a>{" "}
                for more details
              </p>
            </div>
          </div>
          <div className="col-4 d-none d-lg-block">
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button">
                Event Flyer
              </button>
              <button className="btn btn-primary" onClick={() => setShow(true)}>
                Register Today!
              </button>
            </div>
          </div>
        </section>
      </div>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            Register Today!
          </button>
        </div>
      </footer>

      <RegistrationModal
        show={show}
        handleClose={() => setShow(false)}
        handleShow={() => setShow(true)}
        modalTitle="Modal Demo"
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className="row">
              <div className="col">
                <Field
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="col">
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <Field
                  id="emailAddress"
                  name="emailAddress"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="col">
                <PhoneInput
                  country="US"
                  placeholder="Enter phone number"
                  className="form-control"
                  onChange={(value) => {
                    console.log(value);
                  }}
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <Field
                  id="PaymentID"
                  name="paymentID"
                  className="form-control"
                  placeholder="Cash App ID"
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <Field
                  type="checkbox"
                  name="sponsorship-opp"
                  id="sponsorship"
                  value="sponsorship"
                />
                <label class="form-check-label ps-4" for="sponsorship">
                  I Want to Be A Sponsor
                </label>
              </div>
            </div>

            <TotalsPartial />

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </Form>
        </Formik>
      </RegistrationModal>
    </div>
  );
}

export default EventInfo;
