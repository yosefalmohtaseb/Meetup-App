import React, { useRef } from "react";
import Card from "../ui/Card";
import clasess from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetups(meetupData);
  }
  return (
    <Card>
      <form className={clasess.form} onSubmit={submitHandler}>
        <div className={clasess.control}>
          <label htmlFor="title"> MeetUp Tittle</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={clasess.control}>
          <label htmlFor="image">MeetUp Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={clasess.control}>
          <label htmlFor="address"> MeetUp Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={clasess.control}>
          <label htmlFor="description"> MeetUp Description</label>
          <textarea
            rows={5}
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className={clasess.actions}>
          <button> Add New MeetUp</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
