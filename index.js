const Box = props => {
  <div className={props.style}>
    {props.size}
  </div>
}

const element = (
  <h1>Boxes</h1>
  <Box style="bg-orange" size="Small" />
  <Box style="bg-blue" size="Medium" />
  <Box style="bg-pink" size="Large" />
)

ReactDOM.render(element, document.getElementById("root"));
