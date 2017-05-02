class WriteMultipleRegisters {

  static fromBuffer (buffer) {
    let start = buffer.readUInt16BE(0)
    let quantity = buffer.readUInt16BE(2)

    return new WriteMultipleRegisters(start, quantity)
  }

  constructur (start, quantity) {
    this._start = start
    this._quantity = quantity
  }

  get fc () {
    return 0x0F
  }

  get start () {
    return this._start
  }

  get quantity () {
    return this._quantity
  }

}

module.exports = WriteMultipleRegisters