const coinsList = document.getElementById('coins-list');
const endPoint = 'https://api.coincap.io/v2/assets';

const append = (data) => {
  data.forEach(({ rank, name, symbol, priceUsd, marketCapUsd, volumeUsd24Hr, changePercent24Hr }) => {
    const tableRow = document.createElement('tr');
    const list = document.createElement('td');
    const price = document.createElement('td');
    const ranks = document.createElement('td');
    const marketCap = document.createElement('td');
    const volume = document.createElement('td');
    const change = document.createElement('td');
    ranks.innerText = `${rank}`
    list.innerText = `${name} (${symbol})`;
    price.innerText = `${Number(priceUsd).toLocaleString('EN', { style: 'currency', currency: 'USD' })}`;
    change.innerText = `${Number(changePercent24Hr).toFixed(2)}%`
    marketCap.innerText = `${Number(marketCapUsd).toLocaleString('EN', { style: 'currency', currency: 'USD' })}`
    volume.innerText = `${Number(volumeUsd24Hr).toLocaleString('EN', { style: 'currency', currency: 'USD' })}`
    tableRow.appendChild(ranks);
    tableRow.appendChild(list);
    tableRow.appendChild(price);
    tableRow.appendChild(change);
    tableRow.appendChild(marketCap);
    tableRow.appendChild(volume);
    coinsList.appendChild(tableRow);
  });
};

const fetchCoins = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  try {
    const response = await fetch(endPoint, requestOptions);
    const database = await response.json();
    const { data } = database;
      append(data.filter((coin, index) => index < 10));
  } catch (error) {
    console.log('error', error);
  }
};

date = new Date();
year = date.getFullYear();
document.getElementById("assinatura").innerHTML = "L U C A S &ensp; G O M E S &ensp;© &ensp;" + year;

window.onload = () => fetchCoins();