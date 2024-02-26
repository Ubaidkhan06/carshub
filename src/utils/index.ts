import { CarProps, FilterProps } from "@/types";

export const fetchCars = async (filters: FilterProps) => {
  const { fuel, limit, manufacturer, model, year } = filters;

  const options = {
    url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    headers: {
      "X-RapidAPI-Key": "680f4bbbcamshca839b1b02bf550p1256a9jsn4ab75a356798",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  const response = await fetch(options.url, { headers: options.headers });
  const result = await response.json();
  return result;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/car-image-api");

  const { make, year, model, fuel_type } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  url.searchParams.append("fuel", `${fuel_type}`);
  return `${url}`;
};

export const calculateRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalratePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalratePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
