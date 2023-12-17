import { Readable, Writable, Transform } from 'node:stream';
/**
 * O node.js tem uma API de streams que é usada para ler e escrever dados de forma eficiente.
 */

class OneToHundredStream extends Readable {
  index = 1
  // _read é chamado quando o consumidor está pronto para receber dados
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buffer = Buffer.from(String(i))
        /**
         * Node aceita três de dados: Buffer, String e Object Mode.
         * Buffer é um tipo de dado que o node usa para representar dados binários.
         */

        this.push(buffer) // push é usado para enviar dados para o consumidor
      }
    }, 10)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    /**
     * @param 1 - poderia enviar um error caso o que eu recebo não fosse um numero
     * @param 2 - a conversão/transformado
     */
    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  // _write é chamado quando o consumidor está pronto para receber dados
  _write(chunk, encoding, callback) {
    /**
     * chunk é o dado que está sendo enviado para a stream de leitura
     * encoding é a codificação do dado
     * callback é uma função que deve ser chamada quando o processamento do chunk for concluído
     */
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())