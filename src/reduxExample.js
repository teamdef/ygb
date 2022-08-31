// 리덕스 라이브러리를 불러온다.
const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
// 여러개의 리듀서를 묶어서 관리
const combineReducers = redux.combineReducers;

// redux-logger 를 통해 상태 변화에 대한 로그를 상세하게 제공 받는다.
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

// action
// 어떤 상태의 변화가 필요하면 액션이 발생한다.
// 액션은 반드시 type 이라는 필드가 있어야 하고 이 값은 액션의 이름이라고 생각하면 된다.
// 액션 타입을 정의
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT'

// 타입을 가진 오브젝트를 반환하는 액션

const addSubscriber = (_num) => {
    return {
        type: ADD_SUBSCRIBER,
        payload: _num
    }
}
const addViewCount = () => {
    return {
        type: ADD_VIEWCOUNT
    }
}



// reducers
const subscriberState = {
    subscribers: 365
}
// state를 인자로 받고 state의 값이 없을 경우 subscriberState의 값을 넣어준다.
// 두번째 인자는 action
const subscriberReducer = (state = subscriberState, action) => {
    // action 의 type 을 통해 핸들링을 한다.
    // switch 로 action.type 값에 따라 다른 case를 실행
    switch (action.type) {
        case ADD_SUBSCRIBER:
            return {
                // 상태의 불변성을 유지하기 위해 스프레드 연산자를 사용하여 state의 값에 접근
                // 또한 redux 는 action.type 에 따라 실행된 
                // reducer의 값을 거친 state와 기존의 state의 값을 비교하여 변경을 감지한다.
                // 스프레드 연산자(얕은복사)를 사용하지 않을 경우 state 의 값이 같이 바뀌어 변경 감지가 일어나지 않는다.
                ...state,
                subscribers: action.payload
            }
            default: return state;
    }
}
const viewState = {
    view:100
}
const viewReducer = (state = viewState, action) => {
    switch (action.type) {
        case ADD_VIEWCOUNT:
        return {
            ...state,
            view: state.view + 1
        }
        default: return state;
    }
}
const rootReducer = combineReducers({
    view: viewReducer,
    subscriber: subscriberReducer,
})
// store
const store = createStore(rootReducer, applyMiddleware(logger));

// subscribe - view - dispatch
store.dispatch(addSubscriber(5));
// 내 생각
// 1. store.dispatch 함수로 액션을 실행시킨다.
// 2. 액션에서 타입이 반환되고 반환된 타입을 통해 reducer 가 실행되고 타입에 따라 state 를 변경 시킨다 
// 3. redux는 변화를 감지하여 state를 돌려준다.
// 4. 