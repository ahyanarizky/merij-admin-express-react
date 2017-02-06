const initialState = {
  'filter': {
    'status': {
      'title': 'status',
      'data': [{
        'title': 'Publish',
        'class': 'success'
      }, {
        'title': 'Waiting',
        'class': 'warning'
      }, {
        'title': 'Draft',
        'class': 'default'
      }, {
        'title': 'Unpublish',
        'class': 'danger'
      }]
    }
  }
}

export default function data(state = initialState, action){
  switch (action.type) {
    default:
      return state
  }
}
