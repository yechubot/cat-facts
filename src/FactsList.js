const FactsList = ({facts}) => {
  return ( 

    <div className="facts-list">
    
        {facts.map((fact, index)=> (
          <div className="fact-preview" key={index}>
           <p>{fact.text}</p>
          </div>
        ))}
      </div>
   );
}
 
export default FactsList;