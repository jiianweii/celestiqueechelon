export async function getVenues() {
  const venues = await fetch(
    "https://mocki.io/v1/8ede3b6c-5114-4cc5-a859-23fb1e048d75"
  );
  const data = await venues.json();

  return data;
}

export async function getSuites() {
  const suites = await fetch(
    "https://mocki.io/v1/f15408ca-e405-44ff-998e-753f9130a57e"
  );
  const data = await suites.json();

  return data;
}
