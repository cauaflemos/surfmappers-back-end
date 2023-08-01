interface ValidatePostExistsDTO {
    postId: string
    typeResult: "boolean" | "errorParams" | "internalError"
    authenticated: boolean
}