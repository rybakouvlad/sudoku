import { model, Schema, Document } from 'mongoose';

export interface IResult extends Document {
  time: number;
  name: string;
  moves: number;
}

const Result = new Schema({
  time: Number,
  name: String,
  moves: Number,
});

const ResultModel = model<IResult>('Result', Result);

export default ResultModel;
