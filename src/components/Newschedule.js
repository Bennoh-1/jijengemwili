import React, { useState } from "react";


function Newschedule() {
    const [activity, setActivity] = useState("");
    const [time, setTime] = useState("");
    const [duration, setDuration] = useState("");
    const [status, setStatus] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
          activity: activity,
          time: time,
          duration: duration,
          status: status,
        };
        fetch("https://silly-smiling-cuticle.glitch.me/schedule", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        })
        // .then((r) => r.json())
        // .then((newItem) => onAddItem(newItem));
      }


  return (
    <div>
      <form className='form-group bg-light p-5 mt-4' onSubmit={handleSubmit}>
        <span className='headings fs-5'>Create a new schedule</span>
        <div className="mb-3">
            <label className="form-label">Activity</label>
            <select className='form-select'
                value={activity}
                name="activity"
                onChange={(e) => setActivity(e.target.value)}
            >
                <option>Yoga</option>
                <option>Push ups</option>
                <option>Squats</option>
                <option>Meditation</option> 
            </select>
        </div>
        <div className="mb-3">
            <label className="form-label">Time</label>
            <input type="text" 
                className="form-control" 
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="enter time"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Duration</label>
            <input type="text" 
                className="form-control" 
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="enter duration"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Status</label>
            <select className='form-select'
                value={status}
                name="status"
                onChange={(e) => setStatus(e.target.value)}
            >
                <option>Pending</option>
                <option>Done</option>
                <option>Missed</option>
            </select>
        </div>
        <div className="mb-3">
            <input type="submit" className="form-control btn btn-sm btn-dark"/>
        </div>
      </form>
    </div>
  )
}

export default Newschedule