function App(){
  const user = [{
    name : "Santhosh",
    description : "SDE at Amazon",
    interest : ["Open Source", "Dsa", "ML"],
    linkedIn : "https://www.linkedin.com/in/santhosh-kumar-6a6b2a",
    twitter : "https://twitter.com"
  }]
  return(
    <div style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',border: "2px solid grey",borderRadius:"6px",backgroundColor:"white", color:"black",padding : "10px", paddingBottom:"50px", margin:"20px", width : "500px"}}>
    {user.map((val, index) => {
      return (
        <div key={index}>
          <Card name={val.name} description={val.description} interest={val.interest} />
          <Button linkedIn={val.linkedIn} twitter={val.twitter} />
        </div>
      )
    })}
  </div>
);
}
function Button(props){
  return(
    <div>
      <a href={props.linkedIn} target="_blank" rel="noopener noreferrer">
        <button style={{ marginRight: "10px",marginLeft:"0px",borderRadius:"5px", width:"100px", padding:"10px", backgroundColor:"blue", border:"none", color:"white"}}>LinkedIn</button>
      </a>
      <a href={props.twitter} target="_blank" rel="noopener noreferrer">
        <button style={{marginTop: "10px", borderRadius:"5px", width:"100px", padding:"10px", backgroundColor:"blue", border:"none", color:"white"}}>Twitter</button>
      </a>
    </div>
  )
}

function Card(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>Interests</h3>
      <div>
        {props.interest.map((val, index) => {
            return(
              <div key={index}>{val}</div>
            )
        })}
      </div>
    </div>
  )
}
export default App;