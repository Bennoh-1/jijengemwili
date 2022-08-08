import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

function Activities() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://silly-smiling-cuticle.glitch.me/activities")
          .then((r) => r.json())
          .then((item) => setItems(item));
      }, []);

  return (
    <div>
      <Link className='btn btn-sm btn-secondary' exact to='/newactivities'>New Activitie</Link>
      <div className='row mt-3'>
        <div className='w-75 bg-light activity-list px-5 py-4'>
            {items.map((activity) => (
                <div className='row border-bottom mt-2'>
                    <div className='col-3'>{activity.name}</div>
                    <div className='col-9'>{activity.description}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Activities