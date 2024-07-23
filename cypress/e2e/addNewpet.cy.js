
import { createNewPet,findThePetById,findThePetByStatus } from "../helpers/petStore"


describe('API testing for pet end point',()=>{

  let petId;
  
  beforeEach(() => {
    
    const petDetails = { name: "pet3", status: "available" };
    createNewPet(petDetails).then((response) => {
      petId = response.body.id;
      cy.log(petId);
    });
  });
    it('Should be able to add a new pet',()=>{

      const petDetails ={
        name: "pet1",
        status : "available"
      }

      createNewPet(petDetails).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(petDetails.name)
        expect(response.body.status).to.equal(petDetails.status)
      })
    
    })

    it('Should be able to find a pet by id',()=>{

    
        findThePetById({petId}).then((response)=>
        {
          expect(response.status).to.equal(200)
          expect(response.body.id).to.equal(petId)
          cy.log(petId)
        })
  

    } )

    it('Should be able to find a pet by status',()=>{

     // const status = 'sold'
      findThePetByStatus().then((response)=>
      {
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an('array')
        response.body.forEach((pet)=>{
          expect(pet).to.have.property('id')
          const id1 = pet.id
          cy.log(id1)
          expect(pet).to.have.property('status','sold')
        
        })
      
      })


  } )


  

  
})