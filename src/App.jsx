// @vendors
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @src
// @vendors
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @src
import './App.css';

// @components
import {
  BackgroundVideo,
  Dictionary,
  EventsCalendar,
  Header,
} from './components';

// @pages
//import { Home } from './pages';

// @app
import { setEventsData, setWordsData } from './app';

// @helpers
import { eventsData, words } from './helpers';

const App = () => {
  const dispatch = useDispatch();
  const { showCalendar, showDictionary } = useSelector(
    (state) => state.ui.calendar
  );

  useEffect(() => {
    dispatch(setEventsData(eventsData));
    dispatch(setWordsData(words));
  }, []);

  return (
    <div className="App">
      <BackgroundVideo blur={1}>
        <Header />
        {showCalendar && <EventsCalendar />}
        {showDictionary && <Dictionary />}
      </BackgroundVideo>
      {/* <Home /> */}
    </div>
  );
};

export default App;
