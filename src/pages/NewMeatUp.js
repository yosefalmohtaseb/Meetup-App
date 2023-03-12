import React from "react";
import {useHistory} from 'react-router-dom'
import NewMeetupForm from "../component/meetups/NewMeetupForm";

function NewMeatUp() {
  const history = useHistory()
  function addNewMeetupHandeler(meetupData) {
    fetch('https://meetup-app-6552d-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type':'aplicationljson'
      }
    }).then(()=>{history.replace('/')});
  }
  return (
    <section>
      <h1>Add NEw Meetup</h1>
      <NewMeetupForm onAddMeetups={addNewMeetupHandeler} />;
    </section>
  );
}

export default NewMeatUp;
