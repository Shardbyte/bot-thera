import { Column, Entity, ManyToOne, Unique } from 'typeorm';

import { BaseModel } from './base.model';
import { ChannelModel } from './channel.model';

export enum FilterType {
    SECURITY_STATUS,
    SECURITY_CLASS,
    SYSTEM,
    CONSTELLATION,
    REGION,
}

@Entity()
@Unique(['filter', 'channel'])
export class FilterModel extends BaseModel {

    @Column()
    public type!: FilterType;

    @Column()
    public filter!: string;

    @ManyToOne(() => ChannelModel, (channel) => channel.filters, {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT',
    })
    public channel!: ChannelModel;
}
