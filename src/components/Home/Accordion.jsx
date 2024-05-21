import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      <h2 className="text-center fw-bold display-3">
        Frequently asked questions
      </h2>
      <hr></hr>
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

export default Accordion;
