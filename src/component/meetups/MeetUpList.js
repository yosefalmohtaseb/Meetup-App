import MeetUpItem from "./MeetUpItem";
import clasess from "./MeetUpList.module.css";

function MeetUpList(props) {
  return (
    <ul className={clasess.list}>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetUpList;
