import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';

import schema from './src/graphql/schema';
import { db } from './src/models';

const MONGO_URI = 'mongodb://localhost:27017/personal-info';

mongoose.connect(
	MONGO_URI,
	{ useNewUrlParser: true }
);

const PORT = 4000;

const app = express();

app.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress({
		schema,
		context: { db },
	})
);

app.use(
	'/graphiql',
	graphiqlExpress({
		endpointURL: '/graphql',
	})
);

app.listen(PORT, () => console.log(`Server connected at port: ${PORT}`));
