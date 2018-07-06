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
  colorText: {
    color: 'blue',
  },
});

function colorChange(value)
{
  if(parseFloat(value)<0)
  {
    return <label style={{color : 'red'}}>{value}</label>
  }
  else
    return <label style={{ color: 'green' }}>{value}</label>

}
function colorPercentChange(value)
{
  if(parseFloat(value)<0)
  {
    return <label style={{color : 'red'}}>{value}%</label>
  }
  else
    return <label style={{ color: 'green' }}>{value}%</label>

}

const data = [
];

function SimpleTable (props) {
  const { classes } = props;
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
          {props.dataTable.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell className={classes.colorText} component="th" scope="row">
                  {n.code}
                </TableCell>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.price}</TableCell>
                <TableCell numeric>{n.value}</TableCell>
                <TableCell numeric>{colorChange(n.change)}</TableCell>
                <TableCell numeric>{colorPercentChange(n.percentChange)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}


SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);