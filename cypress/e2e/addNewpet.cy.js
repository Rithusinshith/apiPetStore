
import { createNewPet } from "../helpers/petStore"


describe('API testing for pet end point',()=>{

    it('Should be able to add a new pet',()=>{

      const petDetails ={
        petName : "pet1",
        petStatus : "Available"
      }

      createNewPet(petDetails).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(petDetails.petName)
      })

        
    })
})