import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    maxWidth: 400,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const countries = [
  'United States',
  'China',
  'Japan',
  'Dubai',
  'United Kingdom',
  'France',
  'Germany',
  'Korea',
  'India',
  'Canada',
];

const cities = [
  'New York',
  'Beijing',
  'Tokyo',
  'Garhoud',
  'London',
  'Roissy-en-France',
  'Frankfurt',
  'Incheon',
  'Delhi',
  'Toronto',
];

const airports = [
  'JFK John F. Kennedy International Airport',
  'PEK Beijing Capital International Airport',
  'HND Tokyo Haneda Airport',
  'DXB Dubai International Airport',
  'LHR London Heathrow Airport',
  'CDG Charles de Gaulle Airport',
  'FRA Frankfurt Airport',
  'ICN Seoul Incheon International Airport',
  'DEL Indira Gandhi International Airport',
  'YYZ Toronto Pearson International Airport'
];

function getStyles(airport, airportName, theme) {
  return {
    fontWeight: theme.typography.fontWeightRegular
  };
}

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [countryName, setCountry] = React.useState();
  const [cityName, setCity] = React.useState();
  const [airportName, setAirport] = React.useState();

  const handleChange = (event) => {
    setAirport(event.target.value);
  };

  return (
    <>
      <div>
        <FormControl className={clsx(classes.formControl, classes.noLabel)}>
          <Select
            displayEmpty
            value={countryName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => {
              if (selected === undefined) {
                return <em>Country</em>;
              }

              return selected;
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <em>Country</em>
            </MenuItem>
            {countries.map((country) => (
              <MenuItem key={country} value={country} style={getStyles(country, countryName, theme)}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={clsx(classes.formControl, classes.noLabel)}>
          <Select
            displayEmpty
            value={cityName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => {
              if (selected === undefined) {
                return <em>City</em>;
              }

              return selected;
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <em>City</em>
            </MenuItem>
            {cities.map((city) => (
              <MenuItem key={city} value={city} style={getStyles(city, cityName, theme)}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={clsx(classes.formControl, classes.noLabel)}>
          <Select
            displayEmpty
            value={airportName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => {
              if (selected === undefined) {
                return <em>Airport</em>;
              }

              return selected;
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <em>Airport</em>
            </MenuItem>
            {airports.map((airport) => (
              <MenuItem key={airport} value={airport} style={getStyles(airport, airportName, theme)}>
                {airport}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Home;
