const Rayconnect = require("rayconnect-client").default;
const rayconnect =  new Rayconnect({
        scopes: 'support',
        appID: 'rayBuy',
        space: 'main',
        type: 'micros'
      }, undefined, true);

rayconnect.OnConnect(async () => {

   console.log("connected")
   try {

     const user = await rayconnect.GetGuestAccess()
     console.log(user)
   }catch(e){
    console.log(e)
  }
})

