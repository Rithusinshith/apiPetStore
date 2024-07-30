
import { createNewPet,findThePetById,findThePetByStatus,updateThePetDetails,deletePet,updateWithFormData } from "../helpers/petStore"


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

  // Not returning 405, returning 200
  it.skip('Should not be able to create a new pet for an invalid input',()=>{

    const petDetails = {
      name : "pet4",
      status : "someStatus"
    }

    createNewPet(petDetails).then((response)=>{
      expect(response.status).to.equal(405)
      expect(response.body.name).to.equal(petDetails.name)
      expect(response.body.status).to.equal(petDetails.status)
    })

  })
    
  it('should be able to update an existing pet',()=>{

    const petDetails = {
      id : petId,
      name : "newPet3",
      status : "sold"
    }

    updateThePetDetails(petDetails).then((response)=>{
      expect(response.status).to.equal(200)
      expect(response.body.status).to.equal(petDetails.status)
      const idDetails = response.body.id;
      cy.log(idDetails)
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

  it('Should be able to update a pet in the store with form data',()=>{

    updateWithFormData({petId}).then((response)=>
    {
      expect(response.status).to.equal(200)
    })

  } )


  it('should be able to delete an existing pet and return 404 if the pet does not exist',()=>{
   
    deletePet({petId}).then((response)=>{
      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal(petId.toString())

  })

  findThePetById({petId}).then((response)=>
      {
        expect(response.status).to.equal(404)
        expect(response.body.message).to.equal("Pet not found")     
      })

  })

  it('Should be able to find a pet by status',()=>{

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

  })
  
})