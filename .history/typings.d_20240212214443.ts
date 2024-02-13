interface WeatherData {
    list: {
      dt_txt: string;
      weather: {
        main: string;
        description: string;
      }[];
      main: {
        temp: number;
      };
      wind: {
        speed: number;
      };
    }[];
  }

  interface WeatherImageMap {
    [key: string]: string;
  }

  interface GetdayOfWeek {
    [date: string]: string;
  }