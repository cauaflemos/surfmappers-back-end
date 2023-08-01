import { IInputUpdateDTO } from "../interfaces/dtos/repositories/posts/update-post-dto";
import { PostsRepository } from "../interfaces/repositories/posts-repository";

export class Validate {
    constructor(private postRepository: PostsRepository) {}

    async postExists(input: ValidatePostExistsDTO): Promise<boolean> {
        const result = await this.postRepository.exists({ postId: input.postId, authenticated: input.authenticated });
    
        if (result === "not_exists" && input.typeResult === "boolean") {
            return false;
        }
    
        if (result === "not_exists" && ["errorParams", "internalError"].includes(input.typeResult)) {
            throw new Error("Post não existe!");
        }
    
        if (result === "exists_not_authorized" && input.typeResult === "boolean") {
            return false;
        }
    
        if (result === "exists_not_authorized" && ["errorParams", "internalError"].includes(input.typeResult)) {
            throw new Error("Post existe mas não está autorizado!");
        }
    
        return true;
    }
    

}