// use("commerce");
db.produtos.find({
    $and: [{ vendidos: { $ne: 50 } },
        { tags: { $exists: 0 } }] }, { nome: 1, vendidos: 1, _id: 0 });

// https://www.mongodb.com/docs/manual/reference/operator/query/ne/