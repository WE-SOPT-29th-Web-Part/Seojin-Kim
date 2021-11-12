type Action =
  | { type: 'SET_WRITE'; value: Write }
  | { type: 'SET_PREVIEW'; value: Preview };

export default function articleReducer(
  state: Article,
  action: Action
): Article {
  switch (action.type) {
    case 'SET_WRITE':
      console.log(action.value);
      const tags = action.value.parsedTags?.join(',');
      const date = new Date();
      const dateString = `${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일`;
      return { ...state, ...action.value, tags, date: dateString };
    case 'SET_PREVIEW':
      console.log('2', { ...state, ...action.value });
      return { ...state, ...action.value };
    default:
      throw new Error('Unhandled action');
  }
}
