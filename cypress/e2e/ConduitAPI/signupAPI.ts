import addUser from "../../support/helpers/signupHelper"
describe('Conduit: Create New Account',()=>{
    // it('Conduit: Signup',()=>{
    //     return cy.request({
    //         method:'POST',
    //         url:"https://conduit.productionready.io/api/users",
    //         body:{
    //             user:{
    //                 username:`nesrin${Math.round((Math.random())*100)}`,
    //                 email:`nesrin${Math.round((Math.random())*100)}@test.com`,
    //                 password:'24681'
    //             }
    //         }
    //        })
    // })


    // it('Conduit: Signup Account',()=>{
    //        addUser.conduitNewAccountAPI(`nesrin${Math.round((Math.random())*100)}`,`nesrin${Math.round((Math.random())*100)}@test.com`,'24681')
    // })

    
      it.only('Conduit: Signup Using Api',()=>{
        const apiPayload={
            user:{
                username:`nesrin${Math.round((Math.random())*1000)}`,
                email:`nesrin${Math.round((Math.random())*1000)}@test.com`,
                password:'24681'
            }
           }
           addUser.conduitNewAccount(apiPayload).then((response)=>{
            expect(response.status).to.equal(201)
           })
    })
})

  
