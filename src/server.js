import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';
import { extractQueryParams } from './utils/extract-query-params.js';

/**
 * Query Parameters: URL Stateful => FIltros, paginação, não-obrigatórias. Ex: http://localhost:3333/users?userId=1&name=Myguel
 * Route Parameters: Identificação de recurso. Ex: DELETE http://localhost:3333/users/1
 * Request body: Envio de informações de um formulário.
 */

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url) // verifica se a regex criada bate com a url recebida
  })

  if (route) {
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res)
  }

  res.writeHead(404).end()
})

server.listen(3333)
