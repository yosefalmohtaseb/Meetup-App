import React from "react";
import Card from "../ui/Card";
import clasess from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={clasess.form}>
        <div className={clasess.control}>
          <label htmlFor="title"> MeetUp Tittle</label>
          <input type="text" required id="title" />
        </div>
        <div className={clasess.control}>
          <label htmlFor="image">MeetUp Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={clasess.control}>
          <label htmlFor="address"> MeetUp Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={clasess.control}>
          <label htmlFor="description"> MeetUp Description</label>
          <textarea rows={5} required id="description" />
        </div>
        <div className={clasess.actions}>
          <button> Add New MeetUp</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
