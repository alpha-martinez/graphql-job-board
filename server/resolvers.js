const db = require('./db');

const Query = {
    jobs: () => db.jobs.list()
};

module.exports = { Query };
// export the query in this file
