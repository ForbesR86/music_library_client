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
},{
  dataField: "id",
  text: "Remove",
  editable: false,
  formatter: (cellContent, row) => {
    return (
      <button
        className="btn btn-danger btn-xs"
        onClick={() => handleDelete(row.id)}
      >
        Delete
      </button>
    );
  }},{
    dataField: "id",
    text: "Edit",
    editable: false,
    formatter: (cellContent, row) => {
      return (
        <button
          className="btn btn-success btn-xs"
          onClick={() => handleEdit(row.id)}
        >
          Edit
        </button>
      );
    },
},
];

const handleDelete = (rowId) => {
console.log(rowId);
};

const handleEdit = (rowId) => {
  console.log(rowId);
  };

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