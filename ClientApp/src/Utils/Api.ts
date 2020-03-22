import data from "./FakeData";

const Api = {
  GetMarketList: () => {
    return fetch(
      "https://controlservice.sicher-einkaufen.info/marketlist"
    ).then(response => {
      return response.json();
    });
  },
  GetMarket: (marketid: number) => {
    return fetch(
      "https://controlservice.sicher-einkaufen.info/market/" + marketid,
      {
        body: JSON.stringify({ MarketID: marketid })
      }
    ).then(response => {
      return response.json();
    });
  },
  Register: (username: string, password: string) => {
    return fetch(
      "https://controlservice.sicher-einkaufen.info//user/Register",
      {
        method: "POST",
        body: JSON.stringify({ Username: username, Password: password })
      }
    ).then(response => {
      return response.json();
    });
  },
  Login: (username: string, password: string) => {
    return fetch("https://controlservice.sicher-einkaufen.info/user/Login", {
      method: "POST",
      body: JSON.stringify({ Username: username, Password: password })
    }).then(response => {
      return response.json();
    });
  },
  GetUserProfil: (token: string) => {
    return fetch("https://controlservice.sicher-einkaufen.info/GetUserProfil", {
      method: "POST",
      body: JSON.stringify({ Token: token })
    }).then(response => {
      return response.json();
    });
  },
  SetMarket: (token: string, marketId: number, status: number) => {
    return fetch("https://inputservice.sicher-einkaufen.info/SetMarket", {
      method: "POST",
      body: JSON.stringify({ Token: token, MarketID: marketId, Status: status })
    }).then(response => {
      return response.json();
    });
  }
};

const ConvertMarketJson = (apiMarket: any) => {
  return {
    Id: apiMarket.osmid,
    Name: apiMarket.name,
    Company: apiMarket.company,
    GPSLocation: {
      lat: apiMarket.latitude,
      long: apiMarket.longitude
    },
    Adresse: apiMarket.address,
    Status: status,
    TimeStamp: apiMarket.timestamp
  };
};

export default Api;
