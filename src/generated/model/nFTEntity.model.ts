import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "../marshal"
import {CollectionEntity} from "./collectionEntity.model"
import {Event} from "./event"
import {Emote} from "./emote.model"

@Entity_()
export class NFTEntity {
  constructor(props?: Partial<NFTEntity>) {
    Object.assign(this, props)
  }

  @Column_("text", {nullable: true})
  name!: string | undefined | null

  @Column_("text", {nullable: true})
  instance!: string | undefined | null

  @Column_("integer", {nullable: true})
  transferable!: number | undefined | null

  @Index_()
  @ManyToOne_(() => CollectionEntity, {nullable: false})
  collection!: CollectionEntity

  @Column_("text", {nullable: true})
  issuer!: string | undefined | null

  @Column_("text", {nullable: true})
  sn!: string | undefined | null

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  metadata!: string | undefined | null

  @Column_("text", {nullable: true})
  currentOwner!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  price!: bigint | undefined | null

  @Column_("bool", {nullable: true})
  burned!: boolean | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  blockNumber!: bigint | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val == null ? undefined : val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => val == null ? undefined : new Event(undefined, val))}, nullable: true})
  events!: (Event | undefined | null)[] | undefined | null

  @OneToMany_(() => Emote, e => e.nft)
  emotes!: Emote[]
}
