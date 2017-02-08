const initialState = {
  'filter': [{
    'title': 'status',
    'value': [{
      'title': 'Publish',
      'class': 'success',
      'active': true
    }, {
      'title': 'Waiting',
      'class': 'warning',
      'active': true
    }, {
      'title': 'Draft',
      'class': 'default',
      'active': true
    }, {
      'title': 'Unpublish',
      'class': 'danger',
      'active': true
    }]
  }],
  'sort': [{
    'title': 'last updated',
    'value': 'descending'
  }, {
    'title': 'title',
    'value': null
  }, {
    'title': 'views',
    'value': null
  }]
}

export default function data(state = initialState, action){
  switch (action.type) {
    default:
      return state
  }
}
