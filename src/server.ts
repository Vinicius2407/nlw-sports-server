import express from "express";

const app = express();

// HTTP methods / API RESTFull / HTTP Codes

// GET, POST, PUT, PATCH, DELETE

/*
* Query Params: http://localhost:3333/ads?search=Diego -> Requisição com parâmetros
* Route Params: http://localhost:3333/ads/5 -> Identificar um recurso
* Body: http://localhost:3333/ads -> Corpo da requisição
*/

app.get("/games", (request, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
    // const gameId = request.params.id;

    return response.json([
        {id: 1, name: "Ads 1"},
        {id: 2, name: "Ads 2"},
        {id: 3, name: "Ads 3"},
        {id: 4, name: "Ads 4"},
        {id: 5, name: "Ads 5"},
    ]);
}); 

app.get('/ads/:id/discord', (request, response) => {
    // const adId = request.params.id;

    return response.json([]);
}); 
app.listen(3333);   