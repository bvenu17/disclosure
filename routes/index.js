
const newsRoutes = require('./newsRoutes');


const constructorMethod = app => {
    app.use("/", newsRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({error:'Not found'});
      });
};

module.exports = constructorMethod;