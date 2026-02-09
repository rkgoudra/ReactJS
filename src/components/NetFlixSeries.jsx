/*
we dont have loops in jsx we use .map method

Don't pass the index as key in 
*/ 
import seriesData from '../api/seriesData.json'
import { SeriesCard } from './SeriesCard.jsx';

export const NetFlixSeries=()=>{
   return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
} 