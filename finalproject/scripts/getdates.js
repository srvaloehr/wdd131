const year = document.getElementById("currentyear");
year.innerHTML = new Date().getFullYear();

const lastmodified = document.getElementById("lastmodified");
lastmodified.innerHTML = `Last Modification: ${document.lastModified}`;

const lastvisitkey = 'lastvisitTime';
  const lastvisitElement = document.getElementById('lastvisit');

  const lastvisit = localStorage.getItem(lastvisitkey);

  if (lastvisit) {
    lastvisitElement.textContent = `Your last visit was on: ${lastvisit}`;
  } else {
    lastvisitElement.textContent = 'This is your first visit!';
  }

  const now = new Date().toLocaleString();
  localStorage.setItem(lastvisitkey, now);