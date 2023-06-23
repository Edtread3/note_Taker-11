const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


const apiRoutes = require("./Develop/routes/apiRoutes");
const htmlRoutes = require("./Develop/routes/htmlRoutes");


const PORT = process.env.PORT || 2007;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname , "/Develop/public")));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => console.log(`Server started listening on PORT ${PORT}`));