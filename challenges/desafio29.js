db.produtos.updateMany({}, {
    $rename: {
        descricao: "descricaoSite",
    },
});

db.produtos.find({}, { _id: 0, nome: true, descricaoSite: 1 });