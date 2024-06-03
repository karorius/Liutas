import '../../my-style.css';
import B from './B';
const el1 =  
<>
  <div style={{backgroundColor:'red',
   width:'50px',
   height:'50px',
   marginTop:'30px' }}>
<i>do</i>
   </div>
   
</>

export default function A() {

    return (
        <div className='A'>
           <B/>
           <B/>
            <div>{el1}</div>
            <div>{el1}</div>
            <div>{el1}</div>
        </div>

        

    );

}