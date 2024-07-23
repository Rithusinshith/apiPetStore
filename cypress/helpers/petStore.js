
export function createNewPet({petName,petStatus}) {

     let body ={
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": petName,
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": petStatus
          
        }

        return cy.request({
            method : 'POST',
            url : '/pet',
            body : body

            }).then((res)=>{
            expect(res.status).to.eq(200)
         })
}