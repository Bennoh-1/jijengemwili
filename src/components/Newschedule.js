import React, { useState } from "react";


function Newschedule() {
   
    const [schedule, setSchedule] = useState({
      activity:"Yoga",
      status:"Pending" ,
      time:"",
      duration:""

    })
    function handleChange(event){
      setSchedule({...schedule,[event.target.name]:event.target.value})
    }
    console.log (schedule)
    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
          activity: schedule.activity,
          time: schedule.time,
          duration: schedule.duration,
          status: schedule.status
        };
        fetch("https://silly-smiling-cuticle.glitch.me/schedule", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        });
        e.target.reset()
        // setSchedule.time("");
        // setSchedule.duration("");
        // setSchedule(schedule.time)
        // .then((r) => r.json())
        // .then((newItem) => onAddItem(newItem));
      }


  return (
    <div>
      <form className='form-group bg-light p-5 mt-4'onSubmit={handleSubmit}>
        <span className='headings fs-5'>Create a new schedule</span>
        <div className="mb-3">
            <label className="form-label">Activity</label>
            <select className='form-select'
                value={schedule.activity}
                name="activity"
                onChange={handleChange}
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
                value={schedule.time}
                onChange={handleChange}
                placeholder="enter time"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Duration</label>
            <input type="text" 
                className="form-control" 
                name="duration"
                value={schedule.duration}
                onChange={handleChange}
                placeholder="enter duration"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Status</label>
            <select className='form-select'
                value={schedule.status}
                name="status"
                onChange={handleChange}
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