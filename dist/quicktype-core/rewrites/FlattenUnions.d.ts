import { TypeGraph } from "../TypeGraph";
import { StringTypeMapping } from "../TypeBuilder";
export declare function flattenUnions(graph: TypeGraph, stringTypeMapping: StringTypeMapping, conflateNumbers: boolean, shouldFlattenUnions: boolean, makeObjectTypes: boolean, debugPrintReconstitution: boolean): [TypeGraph, boolean];
