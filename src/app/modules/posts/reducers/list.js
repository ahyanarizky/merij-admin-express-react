import { FETCH_LIST, SEARCH_LIST, FILTER_LIST, SORT_LIST } from '../constants/actiontypes'

const initialState = [
  {
    'id': 'affe98ce74e2420da53143225221ba99',
    'title': '50 Ideas to Inspire Your Husband',
    'status': 'Publish',
    'channel': 'merij',
    'views': 1500,
    'date': {
      'latest': new Date(Date.now() - 0 * 24 * 60 * 60 * 1000)
    }
  }, {
    'id': '5a831c628158484cb81c97c1539d42bd',
    'title': '15 Things Wives Should Stop Doing',
    'status': 'Draft',
    'channel': 'merij',
    'views': 0,
    'date': {
      'latest': new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    }
  }, {
    'id': '0e9549d6fbdf4366b3a2e7766db3f04e',
    'title': '11 Rules on Marriage You Won’t Learn in School',
    'status': 'Publish',
    'channel': 'merij',
    'views': 350,
    'date': {
      'latest': new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    }
  }, {
    'id': '88326cf363bd4b899538a13f7d2f71f8',
    'title': 'Becoming the Man of Her Dreams',
    'status': 'Draft',
    'channel': 'merij',
    'views': 0,
    'date': {
      'latest': new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    }
  }, {
    'id': '78ff7b62ec6d4812885038496d68ffb6',
    'title': '10 Ideas: Making Time for Your Spouse',
    'status': 'Unpublish',
    'channel': 'merij',
    'views': 711,
    'date': {
      'latest': new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
    }
  }, {
    'id': '370f4f13ffb24dc6806c173275693899',
    'title': 'A Remodeled Barn and a Transformed Marriage',
    'status': 'Waiting',
    'channel': 'merij',
    'views': 378,
    'date': {
      'latest': new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    }
  }, {
    'id': '3e65e67a2a24408d959e02eb49a66bb0',
    'title': 'When Your Marriage Is Dying',
    'status': 'Publish',
    'channel': 'merij',
    'views': 9834,
    'date': {
      'latest': new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
    }
  }, {
    'id': 'c441476f2b4a4e3e865d6d3fbbe109f1',
    'title': '5 Communication Tools That Saved My Marriage',
    'status': 'Publish',
    'channel': 'merij',
    'views': 5000,
    'date': {
      'latest': new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    }
  }, {
    'id': 'baf3c3fccf2b456fa5e72e2fbdcb4b2e',
    'title': 'Fifty Shades of Caution',
    'status': 'Unpublish',
    'channel': 'merij',
    'views': 1257,
    'date': {
      'latest': new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
    }
  }, {
    'id': 'd36e0cd864a841bf9d8b070bbc637d46',
    'title': 'The “Superior Wife Syndrome”',
    'status': 'Waiting',
    'channel': 'merij',
    'views': 0,
    'date': {
      'latest': new Date(Date.now() - 9 * 24 * 60 * 60 * 1000)
    }
  }
]

export default function data(state = initialState, action){
  switch (action.type) {
    case FETCH_LIST:
      return state
    case SEARCH_LIST:
      state = state.map((item, i) => {
        let title = item.title

        item.isFound = false
        if(title && item.isShown) {
          title = title.toLowerCase()
          if(title.search(action.value.toLowerCase()) >= 0) item.isFound = true
        }
        return item
      })

      return state
    case FILTER_LIST:
      let filterProperty = action.property
      let filterStatus = ['status']

      state = state.map((item, i) => {
        item.isShown = false
        return item
      })

      for(let idx = 0; idx < filterProperty.length; idx++) {
        state = state.map((item, i) => {
          if(filterProperty[idx].title === filterStatus[0]) {
            let propValue = filterProperty[idx].value
            for(let idy = 0; idy < propValue.length; idy++) {
              if(item.status.text.toLowerCase() === propValue[idy].title.toLowerCase() && propValue[idy].active)
                item.isShown = true
            }
          }
          return item
        })
      }
      return state
    case SORT_LIST:
      let sortProperty = action.property
      let sortedState = state

      sortProperty.map((item, i) => {
        let propertyTitle = item.title.toLowerCase()
        let propertyValue = item.value
        propertyValue = item.value ? item.value.toLowerCase() : null
        let isProcess = false
        let titleParam = ['last updated', 'title', 'views']
        if( propertyTitle === titleParam[0] ||
            propertyTitle === titleParam[1] ||
            propertyTitle === titleParam[2]) isProcess = true
        if(isProcess && propertyValue) {
          sortedState = sortedState.sort((a, b) => {
            let x, y

            if(propertyTitle === titleParam[0]) {
              x = a.date.latest
              y = b.date.latest
            } else if(propertyTitle === titleParam[1]) {
              x = a.title
              y = b.title
            } else if(propertyTitle === titleParam[2]) {
              x = a.detail[1].value
              y = b.detail[1].value
            }

            return (x > y) ? 1 : ((y > x) ? -1 : 0)
          })
          if(propertyValue === 'descending') sortedState = sortedState.reverse()
        }
        return
      })

      state = sortedState.map((item, i) => { return item })

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
        record.isShown = true
        record.date = {}
        record.date.latest = item.date.latest
        return record
      })
      return state
  }
}
