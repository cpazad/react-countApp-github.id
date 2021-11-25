import React, { useState } from 'react';


const Counter = () => {

    const [state, setstate] = useState(0)

    return (
    <div className="count">
        <div className="card-body shadow">
        <h1>{state}</h1>
        <button onClick={()=>state>9? setstate(0):setstate(state + 1)} className="btn btn-primary">Increament ++ </button>
        <button onClick={()=>setstate(state - 1)}  className="btn btn-danger">Decreament ++ </button>
        <button onClick={()=>setstate(0)}  className="btn btn-success"> Reset </button>
        </div>
        

    </div>
    )
}

export default Counter;
