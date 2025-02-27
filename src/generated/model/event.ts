import assert from "assert"
import * as marshal from "../marshal"

export class Event {
  private _blockNumber!: string | undefined | null
  private _timestamp!: number | undefined | null
  private _caller!: string
  private _interaction!: string | undefined | null
  private _meta!: string

  constructor(props?: Partial<Omit<Event, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._blockNumber = json.blockNumber == null ? undefined : marshal.string.fromJSON(json.blockNumber)
      this._timestamp = json.timestamp == null ? undefined : marshal.int.fromJSON(json.timestamp)
      this._caller = marshal.string.fromJSON(json.caller)
      this._interaction = json.interaction == null ? undefined : marshal.string.fromJSON(json.interaction)
      this._meta = marshal.string.fromJSON(json.meta)
    }
  }

  get blockNumber(): string | undefined | null {
    return this._blockNumber
  }

  set blockNumber(value: string | undefined | null) {
    this._blockNumber = value
  }

  get timestamp(): number | undefined | null {
    return this._timestamp
  }

  set timestamp(value: number | undefined | null) {
    this._timestamp = value
  }

  get caller(): string {
    assert(this._caller != null, 'uninitialized access')
    return this._caller
  }

  set caller(value: string) {
    this._caller = value
  }

  get interaction(): string | undefined | null {
    return this._interaction
  }

  set interaction(value: string | undefined | null) {
    this._interaction = value
  }

  get meta(): string {
    assert(this._meta != null, 'uninitialized access')
    return this._meta
  }

  set meta(value: string) {
    this._meta = value
  }

  toJSON(): object {
    return {
      blockNumber: this.blockNumber,
      timestamp: this.timestamp,
      caller: this.caller,
      interaction: this.interaction,
      meta: this.meta,
    }
  }
}
