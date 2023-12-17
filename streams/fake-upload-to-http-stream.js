import { Readable, Writable, Transform } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1
  // _read é chamado quando o consumidor está pronto para receber dados
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 5) {
        this.push(null)
      } else {
        const buffer = Buffer.from(String(i))
        /**
         * Node aceita três de dados: Buffer, String e Object Mode.
         * Buffer é um tipo de dado que o node usa para representar dados binários.
         */
        this.push(buffer) // push é usado para enviar dados para o consumidor
      }
    }, 1000)
  }
}

fetch('http://localhost:3334', {
  method: 'POST', // para simular o envio de stream só pode ser enviada se for POST ou PUT
  body: new OneToHundredStream(),
  duplex: 'half',
}).then(response => {
  return response.text()
}).then(data => {
  console.log(data)
})