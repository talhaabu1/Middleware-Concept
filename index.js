const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

const adminRouter = express.Router();

// pramitar Middleware
// const loggerWrapper = (option) => {
//   return function (req, res, next) {
//     if (option.log) {
//       // console.log(
//       //   `${new Date(Date.now()).toLocaleDateString()} - ${req.method} - ${
//       //     req.originalUrl
//       //   } - ${req.protocol}`
//       // );
//       req.requestTime = "time over";
//       next();
//     } else {
//       throw new Error("this is not a valid admin route");
//     }
//   };
// };
// ______E______N_______D______?

// simple middleware
// const logger = (req, res, next) => {
//   console.log(
//     `${new Date(Date.now()).toLocaleDateString()} - ${req.method} - ${
//       req.originalUrl
//     } - ${req.protocol}`
//   );
//   next();
// };
// ______E______N_______D______?

// adminRouter.use(loggerWrapper({ log: true }));

// adminRouter.get("/dashboard", (req, res) => {
//   console.log(req.requestTime);
//   res.send("my admin router Dahsboard 🎟 ⏬ ");
// });

// app.use("/admin", adminRouter);

app.post("/", (req, res) => {
  console.log(req.accepts("json"));
  res.send("<h1><center>Hello, world! 🎧</center> </h1>");
});

// error catch middleware
// const errorMiddleware = (err, req, res, next) => {
//   console.error(err.message);
//   res.status(500).send("Error: " + err.message);
// };
// ______E______N_______D______?

// adminRouter.use(errorMiddleware);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
