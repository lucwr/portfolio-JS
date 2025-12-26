import MyInfo from "../MyInfo";

export default function Location() {
  return (
    <div className="p-12">
      {/* <iframe
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM0TVuAPDt4kR50yLH64psN8&key=AIzaSyBnHq_7qvsHwOb-VEDDF32c7v7jtpaA798"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe> */}
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="Location" value="New York, US" />
        <MyInfo field="Email" value="cdavid93113@gmail.com" />
        <MyInfo field="Freelance" value="Available" />
      </ul>
    </div>
  );
}
