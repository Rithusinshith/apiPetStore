
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

export function findThePetByStatus(){

    return cy.request({
        method : 'GET',
        url : '/pet/findByStatus',
        qs : {status:'sold'}
    })
}

export function updateThePetDetails({id,name,status,}){
    cy.log(id)
    let body ={
        "id": id,
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
        method : 'PUT',
        url:'/pet',
        body: body,
        headers: {
            'Content-Type': 'application/json'
          },
        failOnStatusCode: false
    })
}













