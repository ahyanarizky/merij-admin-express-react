import { FETCH_CONTENT } from '../constants/actiontypes'

const initialState = [
  {
    'id': 0,
    'date': 'Oct 30, 2016',
    'list': [
      {
        'type': 'post',
        'detail': {
          'image': 'https://source.unsplash.com/cMfKWKggyvQ/500x250',
          'title': 'What is Lorem Ipsum?',
          'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.'
        }
      },
      {
        'type': 'post',
        'detail': {
          'title': 'You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.',
          'text': 'William W. Purkey',
        }
      }
    ]
  }, {
    'id': 1,
    'date': 'Oct 10, 2016',
    'list': [
      {
        'type': 'post',
        'detail': {
          'image': 'https://source.unsplash.com/rl7mUDEUmVE/500x250',
          'title': 'What is Lorem Ipsum?',
          'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.'
        }
      }
    ]
  }
]

export default function data(state = initialState, action){
  switch (action.type) {
    case FETCH_CONTENT:
      return state
    default:
      return state
  }
}
