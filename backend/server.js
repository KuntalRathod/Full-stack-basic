import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "first joke",
    },
    {
      id: 2,
      title: "B joke",
      content: "second joke",
    },
    {
      id: 3,
      title: "C joke",
      content: "third joke",
    },
    {
      id: 4,
      title: "D joke",
      content: "forth joke",
    },
    {
      id: 5,
      title: "E joke",
      content: "five joke",
    },
  ];
    res.send(jokes);
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
