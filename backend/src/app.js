import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());


let categories = ['successQuotes', 'perseveranceQuotes', 'happinessQuotes'];

let successQuotes = [
  {
    'quote': 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'author': 'Winston S. Churchill'
  },
  {
    'quote': 'The way to get started is to quit talking and begin doing.',
    'author': 'Walt Disney'
  }
];

let perseveranceQuotes = [
  {
    'quote': 'It’s not that I’m so smart, it’s just that I stay with problems longer.',
    'author': 'Albert Einstein'
  },
  {
    'quote': 'Perseverance is failing 19 times and succeeding the 20th.',
    'author': 'Julie Andrews'
  }
];

let happinessQuotes = [
  {
    'quote': 'Happiness is not something ready made. It comes from your own actions.',
    'author': 'Dalai Lama'
  },
  {
    'quote': 'For every minute you are angry you lose sixty seconds of happiness.',
    'author': 'Ralph Waldo Emerson'
  }
];

const quotesByCategory = {
  successQuotes,
  perseveranceQuotes,
  happinessQuotes
};


app.get("/", (req, res) => {
  res.json({ 
    ok: true, 
    msg: "Hello from Express inside a Dev Container!",
    name: "Haniya Kulsum, Taraka Chennupati"
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

app.get("/hello", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/math/circle/:r", (req, res) => {
  const radius = Number(req.params.r);

  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;

  res.json({ area, circumference });
});

app.get("/math/rectangle/:width/:height", (req, res) => {
  const width = Number(req.params.width);
  const height = Number(req.params.height);

  const area = width * height;
  const perimeter = 2 * (width + height);

  res.json({ area, perimeter });
});

app.get("/math/power/:base/:exponent", (req, res) => {
  const base = Number(req.params.base);
  const exponent = Number(req.params.exponent);

  const result = Math.pow(base, exponent);

  const includeRoot = req.query.root === "true";

  if (includeRoot) {
    const rootValue = Math.sqrt(base);
    res.json({ result, root: rootValue });
  } else {
    res.json({ result });
  }
});


app.get("/quotebook/categories", (req, res) => {
  let responseText = "";

  for (let category of categories) {
    responseText += `A possible category is ${category}\n`;
  }

  res.type("text");
  res.send(responseText);
});

app.get("/quotebook/quote/:category", (req, res) => {
  const category = req.params.category;

  // check if the category is valid
  if (!categories.includes(category)) {
    return res.status(400).json({ error: `no category listed for ${category}` });
  }

  // get the correct array of quotes
  const quoteList = quotesByCategory[category];

  // pick random quote
  const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

  res.json(randomQuote);
});


app.post("/quotebook/quote/new", (req, res) => {
  const { category, quote, author } = req.body;

  // validate body
  if (!category || !quote || !author || !categories.includes(category)) {
    return res.status(400).json({ error: "invalid or insufficient user input" });
  }

  // get array and push new quote
  const quoteList = quotesByCategory[category];
  quoteList.push({ quote, author });

  res.type("text").send("Success!");
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});