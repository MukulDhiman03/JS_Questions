const colors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };
// Expected output: { '#FF0000': 'red', '#00FF00': 'green', '#0000FF': 'blue' }

const newObj = Object.entries(colors).map(([key, value]) => [value, key]);
console.log(Object.fromEntries(newObj));
