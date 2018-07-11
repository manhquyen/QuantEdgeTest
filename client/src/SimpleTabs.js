import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from "@material-ui/core/Toolbar";
import SimpleTable from './SimpleTable';


const data = [];

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});
const magrinleft ={
  marginLeft: 'auto'
};

const sortTopGainer= (arrayDataTable)=>{
    arrayDataTable.sort((a,b) => {
      return b.value - a.value;
    })
    return arrayDataTable.slice(0,19);
}
const sortTopLoser= (arrayDataTable)=>{
  arrayDataTable.sort((a,b) => {
    return a.value - b.value;
  })
  return arrayDataTable.slice(0,19);
}

class SimpleTabs extends React.Component {
   constructor(props){
     super(props);
     this.state={
       value: 0,
       dataTable: data};
   }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentDidMount(){
    console.log("componentDidMount");
     this.intervalId=setInterval(() => {this.loadData()},5000);
     this.loadData();
  };
  componentWillUnmount() {
    console.log("componentWillUnMount");
    clearInterval(this.intervalId);
  }
  loadData(){
    fetch("/api/getDatas")
    .then(res => res.json())
    .then(
      (result) =>{
           this.setState({
            dataTable: result
           });
           console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="title" color="inherit">
            S&P/ASX
          </Typography>
          <Tabs  style={magrinleft} value={value} onChange={this.handleChange}>
            <Tab label="TOP GAINERS" />
            <Tab label="TOP LOSERS" />
          </Tabs>
          </Toolbar>
        </AppBar>
        {value === 0 && <TabContainer><SimpleTable dataTable = {sortTopGainer(this.state.dataTable)}/></TabContainer>}
        {value === 1 && <TabContainer><SimpleTable dataTable = {sortTopLoser(this.state.dataTable)}/></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);