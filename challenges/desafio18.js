db.produtos.updateMany({ nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
{ $addToSet: {
    ingredientes: "bacon",
} });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });

/* 
db.produtos.updateMany({ nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
{ $push: {
    ingredientes: "bacon",
} });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
 */