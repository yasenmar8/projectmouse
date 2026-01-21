fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const app = document.getElementById('app');
    app.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
  })
  .catch(() => {
    document.getElementById('app').innerText = 'Failed to load data.';
  });
