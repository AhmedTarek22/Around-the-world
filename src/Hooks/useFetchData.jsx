import { useEffect, useState } from "react";

const useFetchData = (country) => {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData();
  }, [country]);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/mledoze/countries/master/countries.json",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data[0]);

      if (country) {
        const selectedCountry = data.find(
          (item) => item.name.common.toLowerCase() === country.toLowerCase(),
        );

        if (!selectedCountry) {
          throw new Error("Country not found");
        }

        setCountriesData(selectedCountry);
      } else {
        setCountriesData(data);
        setFilteredCountries(data);
        localStorage.setItem("countries", JSON.stringify(data));
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    countriesData,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  };
};

export default useFetchData;
