const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.2lt9h.mongodb.net/PROJECT-RS",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("connected to MongoDB"))
    .catch((Err) => console.log("failed to connect to MongoDB", Err));