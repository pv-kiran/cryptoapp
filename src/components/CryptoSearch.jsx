/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useContext, useEffect, useState } from "react";
import { cryptoInstance } from "../api/axiosInstance";
import { API_ENDPOINTS } from "../constants/endpoints";
import { useNavigate } from "react-router-dom";
import { NavigationContext } from "../context/ContextNavigation";

const filter = createFilterOptions();

function CryptoSearch({ mobile }) {
  // selecting the crypto
  const [value, setValue] = useState(null);

  // list the coins on the search area - auto complete
  const [topCoins, setTopCoins] = useState([]);

  // handling the bottom swipeable
  const { toggleDrawer } = useContext(NavigationContext);

  const navigate = useNavigate();

  // fetching the cryto data
  const fetchAll = async () => {
    try {
      const { data } = await cryptoInstance.get(API_ENDPOINTS.FETCH_ALL());
      const coinData = data.map((item) => {
        return { id: item.id, name: item.name, image: item.image };
      });
      setTopCoins(coinData);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        navigate(`/coin/${newValue?.id}`);
        toggleDrawer(false);
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
      sx={{
        width: mobile ? "100%" : "25rem",
        display: {
          xl: "block",
          lg: "block",
          md: mobile ? "block" : "none",
          sm: mobile ? "block" : "none",
          xs: mobile ? "block" : "none",
        },
        height: mobile ? "" : 10,
        marginTop: mobile ? ".5rem" : "-3.2rem",
        border: mobile ? "2px #2c93b0 solid" : "",
        borderRadius: ".5rem",
      }}
      freeSolo
      renderInput={(params) => (
        <TextField sx={{ border: "0" }} {...params} label="Search Crypto's" />
      )}
    />
  );
}

export default CryptoSearch;
