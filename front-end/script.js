let text = document.getElementById('text');

async function getData() {
  const response = await fetch('http://localhost:3000/Datos');
  const data = await response.json();

  text.textContent = '';
  text.textContent = data;
}
