import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";
import { useNavigate } from "react-router-dom";

const filter = createFilterOptions();

function CryptoSearch() {
  const [value, setValue] = useState(null);
  const [topCoins, setTopCoins] = useState([]);
  const navigate = useNavigate();
  const fetchAll = async () => {
    try {
      const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_ALL());
      console.log(data);
      const coinData = data.map((item) => {
        return { id: item.id, name: item.name, image: item.image };
      });
      setTopCoins(coinData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        // console.log(newValue);
        // if (typeof newValue === "string") {
        //   setValue({
        //     title: newValue,
        //   });
        // } else if (newValue && newValue.inputValue) {
        //   // Create a new value from the user input
        //   setValue({
        //     title: newValue.inputValue,
        //   });
        // } else {
        //   setValue(newValue);
        // }
        navigate(`/coin/${newValue?.id}`);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.name);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            name: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={topCoins}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => (
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
          }}
          {...props}>
          <span>{option.name}</span>
          <img
            style={{ width: "1rem", height: "1rem" }}
            src={option.image}
            alt="coin image"
          />
        </li>
      )}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Crypto's" />
      )}
    />
  );
}

export default CryptoSearch;
