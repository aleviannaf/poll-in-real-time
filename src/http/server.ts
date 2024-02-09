import fastify from 'fastify';

const app = fastify();

app.get('/hello', ()=>{
    return 'Hellow Ale'
})

app.listen({port: 3333}).then(()=>{
    console.log('HTTP server is running!')
})