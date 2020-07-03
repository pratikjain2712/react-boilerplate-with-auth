import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { mockData, mockHeaders, mockDropdown } from './mock';

const useStyles = makeStyles(theme => ({
  container: {
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(12),
  },
  headers: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftBox: {},
  rightBox: {
    display: 'flex',
    alignItems: 'center',
  },
  dateContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  table: {
    minWidth: 650,
  },
}));

const TaskTable = () => {
  const [page, setPage] = useState(2);
  const [name, setName] = useState(null);
  const [obj, setObj] = useState({});
  const [id, setId] = useState('');

  const handleChange = (val, id) => {
    setName(val);
    setId(id);
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.headers}>
        <div className={classes.leftBox}>
          <span>All Tasks</span>
        </div>
        <div className={classes.rightBox}>
          <form className={classes.dateContainer} noValidate>
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <div>
            <span>
              1 to 100 of 5457 | Items per Page{' '}
              <Select defaultValue={page}>
                {mockData.map((a, idx) => (
                  <MenuItem>{idx}</MenuItem>
                ))}
              </Select>
            </span>
          </div>
          <div>
            <Pagination count={3} color="secondary" />
          </div>
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* {mockHeaders.map((a, idx) => {
                  return (
                    <TableCell key={idx}>
                      {a}
                      <Select
                        variant="outlined"
                        id={a}
                        value={1}
                      >
                        {mockDropdown.map((c,id)=><MenuItem>{c}</MenuItem>)}
                      </Select>
                    </TableCell>
                  );
                })} */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a, idx) => {
                  if (idx === 7 || idx === 8) {
                    return <TableCell>{mockHeaders[idx]}</TableCell>;
                  }
                  // console.log(idx === id, 'name', name);
                  return (
                    <TableCell>
                      <Select value={idx === id && name}>
                        {mockHeaders[idx].map(b => (
                          <MenuItem onClick={() => handleChange(b, idx)}>
                            {b}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {mockData.map((b, idx) => (
                <TableRow key={idx}>
                  <TableCell>{b.customer}</TableCell>
                  <TableCell>{b.location}</TableCell>
                  <TableCell>{b.line}</TableCell>
                  <TableCell>{b.station}</TableCell>
                  <TableCell>{b.product}</TableCell>
                  <TableCell>{b.objectType}</TableCell>
                  <TableCell>{b.priority}</TableCell>
                  <TableCell>{b.noofimg}</TableCell>
                  <TableCell>{b.uploaded}</TableCell>
                  <TableCell>{b.assignedBy}</TableCell>
                  <TableCell>{b.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TaskTable;
