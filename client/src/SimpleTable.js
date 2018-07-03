import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(code, name, price, value, change, percentChange) {
  id += 1;
  return { id, code, name, price, value, change, percentChange };
}

const data = [
  createData('CBA.AX','BANK OF AUSTRALIA', 159, 6.0, 24, 4.0),
  createData('SRX.AX','MEDICAL LIMITED', 237, 9.0, 37, 4.3),
  createData('ANZ.AX', 'ZEALAND BANKING',262, 16.0, 24, 6.0),
  createData('BHP.AX', 'BHP BILLION',305, 3.7, 67, 4.3),
  createData('WBC.AX', 'WESTPAC BANKING',356, 16.0, 49, 3.9),
];


class SimpleTable extends React.Component {
  componentDidMount(){
    setInterval(function(){
     // console.log(data);
      fetch("/api/getDatas")
      .then(res => res.json())
      .then(
        (result) =>{
            console.log(result);
        },
        (error) => {
          console.log("error");
        }
      )

    },5000);
  };
  render(){
  const { classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Company</TableCell>
            <TableCell numeric>Price</TableCell>
            <TableCell numeric>Value</TableCell>
            <TableCell numeric>Change</TableCell>
            <TableCell numeric>%Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.code}
                </TableCell>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.price}</TableCell>
                <TableCell numeric>{n.value}</TableCell>
                <TableCell numeric>{n.change}</TableCell>
                <TableCell numeric>{n.percentChange}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);