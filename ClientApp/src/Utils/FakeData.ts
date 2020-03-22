const data = {
  GetMarketList: {
    Markets: [
      {
        Id: 42,
        Name: "TollerNetto",
        Company: "Aldi",
        GPSLocation: {
          lat: 12.516,
          long: 21.31231
        },
        Adresse: "Straße Mit HausNummer Und So",
        Status: 1,
        TimeStamp: "01-01-1970"
      },
      {
        Id: 43,
        Name: "TollerLidl",
        Company: "Aldi",
        GPSLocation: {
          lat: 12.216,
          long: 21.31231
        },
        Adresse: "StraßeMitHausNummerUndSo",
        Status: 1,
        TimeStamp: "01-01-1970"
      },
      {
        Id: 12335,
        Name: "Rewe um die Ecke",
        Company: "Rewe",
        Adresse: "Straße5",
        GPSLocation: { lat: 52.520008, long: 13.404954 },
        Status: 3 // 1 = leer; 2=mittel; 3=voll; null = undefiniert
      },
      {
        Id: 2562,
        Name: "Rewe um die Ecke",
        Company: "Rewe",
        Adresse: "Straße3",
        GPSLocation: { lat: 52.600008, long: 13.404954 },
        Status: 2 // 1 = leer; 2=mittel; 3=voll; null = undefiniert
      },
      {
        Id: 2462,
        Name: "Rewe um die Ecke",
        Company: "Rewe",
        Adresse: "Straße3",
        GPSLocation: { lat: 52.500008, long: 13.404954 },
        Status: 1 // 1 = leer; 2=mittel; 3=voll; null = undefiniert
      }
    ]
  },
  GetMarket: {
    Id: 42,
    Name: "TollerNetto",
    Company: "Aldi",
    GPSLocation: {
      lat: 12.516,
      long: 21.31231
    },
    Adresse: "StraßeMitHausNummerUndSo",
    Status: 1,
    TimeStamp: "01-01-1970"
  },
  Login: {
    Token: "fsdafsadjklföjaskldjflkasödjf"
  },
  Login__Failed: {
    Token: ""
  },
  Register: {
    Success: true
  },
  GetUserProfil: {
    UserName: "Diether Müller",
    MarketId: 42
    //vielleicht noch mehr infos
  },
  SetMarket: {
    Success: true // Rückgabe True/False für Erfolgreiches setzen
  }
};

export default data;
