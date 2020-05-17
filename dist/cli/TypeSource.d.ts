/// <reference types="node" />
import * as stream from "stream";
import { JSONSourceData, JSONSchemaSourceData } from "quicktype-core";
import { GraphQLSourceData } from "../quicktype-graphql-input";
export interface JSONTypeSource extends JSONSourceData<stream.Readable> {
    kind: "json";
}
export interface SchemaTypeSource extends JSONSchemaSourceData {
    kind: "schema";
}
export interface GraphQLTypeSource extends GraphQLSourceData {
    kind: "graphql";
}
export declare type TypeSource = GraphQLTypeSource | JSONTypeSource | SchemaTypeSource;
