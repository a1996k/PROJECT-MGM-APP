const express = require('express');
const app = express(); 

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

require('dotenv').config({ path: ('../.env') });

const port = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
})
);

app.listen(port, console.log("-------------STARTED-------------"))