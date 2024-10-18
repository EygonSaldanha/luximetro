import "./App.css";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <p>Bruto</p>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2690488/charts/1?api_key=5XUZKWZ8R8J1LU1W&bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=5&type=line&update=15"
          ></iframe>
        </div>
        <div>
          <p>VOLTS</p>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2690488/charts/2?api_key=5XUZKWZ8R8J1LU1W&bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=5&type=line&update=15"
          ></iframe>
        </div>
        <div>
          <p>PWM</p>
          <iframe
            width="450"
            height="260"
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2690488/charts/3?api_key=5XUZKWZ8R8J1LU1W&bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=5&type=line&update=15"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
