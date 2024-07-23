
export function createNewPet({name,status}) {

     let body ={
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": name,
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": status
          
        }

        return cy.request({
            method : 'POST',
            url : '/pet',
            body : body

            }).then((res)=>{
            expect(res.status).to.eq(200)
         })
}

export function findThePetById({petId}){

    return cy.request({
        method : 'GET',
        url : `/pet/${petId}`,
        failOnStatusCode: false
    })
}


