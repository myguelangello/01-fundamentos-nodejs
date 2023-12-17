import http from 'http'
import { Readable, Writable, Transform } from 'node:stream';

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1
    console.log(transformed);
    /**
     * @param 1 - poderia enviar um error caso o que eu recebo não fosse um numero
     * @param 2 - a conversão/transformado
     */
    callback(null, Buffer.from(String(transformed)))
  }
}

// req e res são streams internas do node
// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)

  return res.end(fullStreamContent)
  /* return req
    .pipe(new InverseNumberStream())
    .pipe(res) */
})

server.listen(3334)