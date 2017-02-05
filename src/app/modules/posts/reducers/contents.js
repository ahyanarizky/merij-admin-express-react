import { FETCH_CONTENT } from '../constants/actiontypes'

const initialState = [
  {
    'id': 'affe98ce74e2420da53143225221ba99',
    'title': '50 Ideas to Inspire Your Husband',
    'status': 'Publish',
    'channel': 'merij',
    'views': 1500
  }, {
    'id': '5a831c628158484cb81c97c1539d42bd',
    'title': '15 Things Wives Should Stop Doing',
    'status': 'Draft',
    'channel': 'merij',
    'views': 0
  }, {
    'id': '0e9549d6fbdf4366b3a2e7766db3f04e',
    'title': '11 Rules on Marriage You Won’t Learn in School',
    'status': 'Publish',
    'channel': 'merij',
    'views': 350
  }, {
    'id': '88326cf363bd4b899538a13f7d2f71f8',
    'title': 'Becoming the Man of Her Dreams',
    'status': 'Draft',
    'channel': 'merij',
    'views': 0
  }, {
    'id': '78ff7b62ec6d4812885038496d68ffb6',
    'title': '10 Ideas: Making Time for Your Spouse',
    'status': 'Unpublish',
    'channel': 'merij',
    'views': 711
  }, {
    'id': '370f4f13ffb24dc6806c173275693899',
    'title': 'A Remodeled Barn and a Transformed Marriage',
    'status': 'Waiting',
    'channel': 'merij',
    'views': 378
  }, {
    'id': '3e65e67a2a24408d959e02eb49a66bb0',
    'title': 'When Your Marriage Is Dying',
    'status': 'Publish',
    'channel': 'merij',
    'views': 9834
  }, {
    'id': 'c441476f2b4a4e3e865d6d3fbbe109f1',
    'title': '5 Communication Tools That Saved My Marriage',
    'status': 'Publish',
    'channel': 'merij',
    'views': 5000
  }, {
    'id': 'baf3c3fccf2b456fa5e72e2fbdcb4b2e',
    'title': 'Fifty Shades of Caution',
    'status': 'Unpublish',
    'channel': 'merij',
    'views': 1257
  }, {
    'id': 'd36e0cd864a841bf9d8b070bbc637d46',
    'title': 'The “Superior Wife Syndrome”',
    'status': 'Waiting',
    'channel': 'merij',
    'views': 0
  }
]

export default function data(state = initialState, action){
  switch (action.type) {
    case FETCH_CONTENT:
      return state
    default:
      state = state.map((item, i) => {
        let record = {}
        record.id = item.id
        record.title = item.title
        record.status = {}
        record.status.text = item.status
        record.status.class = item.status.toLowerCase()

        if(record.status.class === 'publish') record.status.class = 'success'
        else if(record.status.class === 'waiting') record.status.class = 'warning'
        else if(record.status.class === 'draft') record.status.class = 'default'
        else if(record.status.class === 'unpublish') record.status.class = 'danger'
        else record.status.class = ''

        record.detail = [{
          'title': 'channel',
          'value': item.channel
        }, {
          'title': 'views',
          'value': item.views
        }]
        return record
      })
      return state
  }
}
