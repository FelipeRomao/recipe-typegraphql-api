import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://feliperomao:<password>@car-workshop.7txdh.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);
