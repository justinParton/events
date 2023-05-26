function SectionPartial(props) {
  return (
    <section className="row">
      <div className="col">
        <div className={props.classPrepend + "section_content"}>
          <div
            className={
              props.titleClasses + " " + props.classPrepend + "_title "
            }
          >
            {props.title}
          </div>
          <div className={props.classPrepend + "_Details "}>
            {props.details}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPartial;
