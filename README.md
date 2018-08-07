# swagger-mod-demo

This is a demo express app written using npm package [`swagger-mod`][source].

## Start the application

```bash
npm install
node index.js
```

Once these commands were executed the swagger endpoint will be available on `http://localhost:3000`.

```bash
curl http://localhost:3000
```

Filter the petstore swagger document by tags by sending the tag as a query parameter.

```bash
curl http://localhost:3000?tag=pet
```

[source]: https://www.npmjs.com/package/swagger-mod
