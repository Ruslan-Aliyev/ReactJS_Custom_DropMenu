// import logo from './logo.svg';
// import './App.css';
import Select, { components } from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCaretRight);

function App() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  // const dropdownIndicatorStyles = (base, state) => {
  //   let changes = {
  //     transition: 'all .2s ease',
  //     transform: state.selectProps.menuIsOpen ? 'rotate(-90deg)' : null,
  //   };
  //   return Object.assign(base, changes);
  // };

  const CaretDownIcon = () => {
    return <FontAwesomeIcon icon="caret-right" style={{color:'black'}} />;
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };

  const handler = (event) => {
    console.dir(event.value);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      flexDirection: "row-reverse"
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(90deg)' : null,
    }),
  };

  return (
    <div className="App">
      <Select 
        options={options} 
        value={{ value: 'chocolate', label: 'Chocolate' }} 
        //styles={{customStyles, dropdownIndicator: dropdownIndicatorStyles}} 
        styles={customStyles}
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        onChange={handler} 
      />
    </div>
  );
}

export default App;
