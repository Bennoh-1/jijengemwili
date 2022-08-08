import React, { useState, useEffect } from "react";

function Home() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://silly-smiling-cuticle.glitch.me/activities")
          .then((r) => r.json())
          .then((item) => setItems(item));
      }, []);
  return (
    <div>
      <span className='headings'>Dashboard</span>
      <div className='row home-summary'>
        <div className='home-card m-1 shadow-sm p-3 mb-5 bg-white rounded'>
            <span className='headings fs-5'>Workout Summary</span>
            <table className='table mt-3'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Workout</th>
                        <th scope="col">Total Hours</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Yoga</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Push ups</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Squats</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Meditation</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='home-card m-1 shadow-sm p-3 mb-5 bg-white  rounded'>
            <span className='headings fs-5'>Scheduled activities</span>
            <table className='table mt-3'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Time</th>
                        <th scope="col">activity</th>
                        <th scope="col">duration</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr>
                        <th scope="row">{item.id}</th>
                            <td>{item.time}</td>
                            <td>{item.activity}</td>
                            <td>{item.duration}</td>
                            <td><button className="btn btn-sm btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Home