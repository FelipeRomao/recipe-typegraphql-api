import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Recipe {
    @Field()
    _id: String;

    @Field()
    title: String;

    @Field()
    description: String;
}

export default Recipe;
