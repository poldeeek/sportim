import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from '../events.module.css'

import firebase from '../../../config/fbConfig'

import EventListElement from '../eventListElement/eventListElement'
import BeatLoader from "react-spinners/BeatLoader";

const AllEvents = props => {

  const currentUser = useSelector(state => state.firebase.auth.uid)
  const currentCity = useSelector(state => state.mapRedux.city.name)
  const [allEvents, setAllEvents] = useState([]);
  const [limit, setLimit] = useState(9)
  const [showMore, setShowMore] = useState(true)
  const [loading, setLoading] = useState(false)

  // filtry
  const filters = useSelector(state => state.mapRedux.filters)

  const createFiltersTable = React.useCallback(() => {
    const tmp = Object.values(filters);
    const values = [];
    tmp.map((el) => {
      if (el.active) values.push(el.events_name);
    });
    return values;
  }, [filters]); //re create this function when filters change

  const getAllEvents = React.useCallback(
    async (start) => {
      setLoading(true)
      const my_filters = createFiltersTable();
      let myEventsArray = [];
      if (my_filters.length != 0)
        await firebase
          .firestore()
          .collection('wydarzenie')
          .where('sport', 'in', my_filters)
          .where('miasto', '==', currentCity)
          .orderBy('data_rozpoczecia')
          .startAfter(start)
          .limit(limit)
          .get()
          .then((snapshot) => {
            if (snapshot.size < limit) setShowMore(false);
            else setShowMore(true)
            snapshot.forEach((doc) => {
              let info = doc.data();
              let el = {
                id: doc.id,
                ...info,
              };
              myEventsArray.push(el);
            });
          });
      setLoading(false)

      setAllEvents((allEvents) =>
        //use callback to prevent allEvents being a dependency
        allEvents.concat(myEventsArray)
      );
    },
    //re create getAllEvents when createFiltersTable, currentCity
    //  or limit changes
    [createFiltersTable, currentCity, limit]
  );

  useEffect(() => {
    setAllEvents([]);
    getAllEvents(new Date());
    //effect will run when filters change or when
    //  getAllEvents change, getAllEvents will change
    //  when filters, currentCity or limit changes
  }, [filters, getAllEvents]);


  const loader_css = `
  position: relative;
  top: calc(50% - 15px);
  text-align: center;
  `;

  return (
    <div className={styles.AllEvents}>
      <p><b>Wszystkie wydarzenia</b></p>
      {true &&
        <div className={styles.EventsList}>
          {allEvents && allEvents.map(el => {
            return (
              <EventListElement
                key={el.id}
                event={el} />
            )
          })}
        </div>
      }
      <BeatLoader
        css={loader_css}
        size={30}
        color={"#69B4D6"}
        loading={loading}
      />
      {showMore &&
        <div className={styles.showMoreButton} onClick={() => getAllEvents(allEvents[allEvents.length - 1].data_rozpoczecia)}>
          Pokaż więcej
            </div>}
    </div>
  )
}

export default AllEvents;
