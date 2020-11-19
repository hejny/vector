import { Vector } from '../classes/Vector';
import { IVector } from './IVector';

export type IVectorApplyModifierFunction = (vector: Vector) => IVector;
export type IAppliableOnVector = {
    applyOnVector: IVectorApplyModifierFunction;
};

export type IVectorApplyModifier =
    | IVectorApplyModifierFunction
    | IAppliableOnVector;
