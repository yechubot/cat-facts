const FactsList = ({facts}) => {
  return ( 

    <div className="facts-list">
    
        {facts.map((fact)=> (
          <div className="fact-preview" key={facts._id}>
           <p>{fact.text}</p>
          </div>
        ))}
      </div>
   );
}
 
export default FactsList;