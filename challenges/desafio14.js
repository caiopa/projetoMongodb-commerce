db.produtos.find({ ingredientes: { $all: ["picles"] } },
{ _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 } });

// https://www.mongodb.com/docs/manual/reference/operator/query-array/