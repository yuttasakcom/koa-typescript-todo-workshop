import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

export default mongoose.model('todos', TodoSchema);
