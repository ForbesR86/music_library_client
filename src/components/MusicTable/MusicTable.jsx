import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: false,
  hidden: true
}, {
  dataField: 'title',
  text: 'title',
  filter: textFilter(),
  sort: true
}, {
  dataField: 'artist',
  text: 'artist',
  filter: textFilter(),
  sort: true
},{
  dataField: 'album',
  text: 'album',
  filter: textFilter(),
  sort: true
},{
  dataField: 'release_date',
  text: 'release_date',
  filter: textFilter(),
  sort: true
},{
  dataField: 'genre',
  filter: textFilter(),
  text: 'genre'
},{
  dataField: 'liked',
  filter: textFilter(),
  text: 'liked'
}];

const MusicTable = (props) => {
  console.log("console log music table begin");
  console.log(props.songData);
  console.log("props log")
  return(
        <><BootstrapTable
          keyField="id"
          data={props.songData}
          columns={columns}
          filter={ filterFactory()}
          striped
          hover
          condensed
          
          /></>
      );
}


export default MusicTable;