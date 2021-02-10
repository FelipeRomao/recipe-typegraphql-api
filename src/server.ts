import "reflect-metadata";
import "./utils/connection";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import RecipeResolver from "./graphql/recipe/RecipeResolver";

async function bootstrap() {
    const schema = await buildSchema({ resolvers: [RecipeResolver] });

    const server = new ApolloServer({ schema });

    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
