import validate from "../../factories/helpers/validate"

describe("Validates", () => {
	it("should be able to validate if a post exist and is not authorized", async () => {
        const sut = await validate.postExists({ postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57", typeResult: "errorParams", authenticated: true })
    
		expect(sut).toBeTruthy()
	})
	it("should'nt be able to validate if a post exist and is not authorized", async () => {
        const sut = await validate.postExists({ postId: "123", typeResult: "boolean", authenticated: true })
        
		expect(sut).toBeFalsy()
	})
	it("should'nt be able to validate if a post exist and is not authorized", async () => {
        try {
            await validate.postExists({ postId: "123", typeResult: "errorParams", authenticated: true  })
        } catch (error: any) {
            const sut = error;

            expect(sut.message).toEqual("Post não existe!")
        }
    
	})
})