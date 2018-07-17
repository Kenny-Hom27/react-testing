import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'NEW COMMENT'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['NEW COMMENT']);
});
