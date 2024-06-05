import './namai.css';
export default function Namai({manoTekstas,color, show}) {

  
    console.log(manoTekstas,color);

    const namai = manoTekstas;
    return (
        <>
       
       <div className={show}><span>Tekstas2:</span><b style={{color: color}}>{namai}</b></div>
       {/* <div ><h2>Tekstas3 :<b>{namai}</b></h2></div> */}
        
       
    </>
  
    );
}