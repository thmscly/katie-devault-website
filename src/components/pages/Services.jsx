import React from "react";
import { serviceList } from "data/ServiceList";

function Services() {
  return (
    <div className="m-28 mt-12 text-slate-800 font-italiana text-xl">
      <h1 className="text-4xl text-center mb-5">What I Do</h1>
      <div className="grid grid-cols-1 text-center">
        {serviceList.map((service) => (
          <ServiceBlock title={service.title} text={service.text} />
        ))}
      </div>
    </div>
  );
}
//props are in curly brackets because they are destructuring an object
function ServiceBlock({ title, text }) {
  return (
    <div className="p-6">
      <h2 className="font-bold">{title}</h2>
      <p>{text}</p>
    </div>
  );
}
export default Services;