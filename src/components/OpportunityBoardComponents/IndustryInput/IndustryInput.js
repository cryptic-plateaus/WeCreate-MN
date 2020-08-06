import React from "react";
// import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Input from '@material-ui/core/Input';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = (theme) => ({
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  // selectEmpty: {
  //   marginTop: theme.spacing.unit * 2,
  // },
});

class IndustryInput extends React.Component {
  state = {
    industry: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.industry]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Industry</InputLabel>
          <Select
            value={this.state.industry}
            onChange={this.handleChange}
            // inputProps={{
            //   name: 'age',
            //   id: 'age-simple',
            // }}
          >
            <MenuItem value="">
              <em>Select...</em>
            </MenuItem>
            <MenuItem value="Dance">Dance</MenuItem>
            <MenuItem value="Theatre">Theatre</MenuItem>
            <MenuItem value="Design">Design</MenuItem>
            <MenuItem value="Visual Arts">Visual Arts</MenuItem>
            <MenuItem value="Photography">Photography</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

IndustryInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndustryInput);
