import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow"

function TVShowList(props) {
  function mapAllShows() {
    // return props.shows.map( (s) => {
    //   if (s.name.toLowerCase().includes(props.searchTerm)) {
    //     return <TVShow show={s} key={s.id} selectShow={props.selectShow} id = {s.id}/> 
    //   }
    //   else {
    //     return <TVShow show={s} key={s.id} selectShow={props.selectShow} id = {s.id}/> 
    //   }
    // })



    if (!!props.searchTerm) {
      return props.shows.map( (s) => {
        if (s.name.toLowerCase().includes(props.searchTerm)) { return (<TVShow show={s} key={s.id} selectShow={props.selectShow} id = {s.id}/> )}
      })
    } else {
      return props.shows.map( (s) => ( <TVShow show={s} key={s.id} selectShow={props.selectShow} id = {s.id}/> ));
    }
  }


  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
