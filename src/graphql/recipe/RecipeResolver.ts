import { Query, Resolver } from "type-graphql";

import RecipeSchema from "../../model/RecipeSchema";
import Recipe from "./Recipe";

@Resolver(Recipe)
class RecipeResolver {
    
    @Query(() => [Recipe])
    async recipes() {
        const recipes = await RecipeSchema.find();
        return recipes;
    }
}

export default RecipeResolver;
