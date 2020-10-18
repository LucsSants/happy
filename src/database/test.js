const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-10.915187",
    lng: "-37.7315043",
    name: "testeteste",
    about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp:"184894524156",
    images: [
      "https://images.unsplash.com/photo-1601180964280-88c506668304?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1595295413110-3304e36b564f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0",
  })
  


  //consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  
 

  //apagar um dado
  //await db.run("DELETE FROM orphanages WHERE id = '4'")
  
});
