import validate from "../../factories/helpers/validate"

describe("Validates", () => {
	it("should be able to validate if a post exist and is not authorized", async () => {
        const sut = await validate.postExists({ postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57", authenticated: true })
    
		expect(sut).toEqual("exists_not_authorized")
	})
	it("should be able to validate if a post exist and is not authorized", async () => {
        const sut = await validate.postExists({ postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946", authenticated: false })
    
		expect(sut).toEqual("exists")
	})
	it("should'nt be able to validate if a post exist and is not authorized", async () => {
        const sut = await validate.postExists({ postId: "123", authenticated: true })
        
		expect(sut).toEqual("not_exists")
	})
	it("should'nt be able to validate if a post exist and is not authorized", async () => {
        try {
            await validate.postExists({ postId: "123", authenticated: true  })
        } catch (error: any) {
            const sut = error;

            expect(sut.message).toEqual("Post não existe!")
        }
    
	})
})