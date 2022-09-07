async function getData() {
  console.info('menjalankan fetching data');
  let data = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  let res = await data.json();

  return res;
}

getData().then((res) => {
  console.info(res);
  let tbody = document.getElementById("tbody");

  res.forEach((e, i)=>{
    tbody.innerHTML += `
    <tr>
      <td>  ${e. id}  </td>
      <td>  ${e. username}  </td>
      <td>  ${e. email} </td>
      <td>  ${e. address.city} </td>
      <td>  <button> detail </button> </td>
    </tr>
    `
  });
});
