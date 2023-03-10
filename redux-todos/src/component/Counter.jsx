import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/counter";

function getState(state) {
  return state.count;
}

// src/component/Counter.jsx
function Counter() {
  // 관리되고 있는 여러개의 상태 중에 선택한다.
  //    => 상태값을 선택하는 콜백함수를 전달한다.
  //    => selector 함수로는 순수함수가 전달되어야 한다.
  const count = useSelector(getState);
  const dispatch = useDispatch(); // dispatch함수 받아오기

  // console.log(count);

  return (
    <div>
      <p>{count}</p>
      <button> onClick={() => dispatch(increase(10))}+1</button>
      <button> onClick={() => dispatch(decrease(10))}-1</button>
    </div>
  );
}

export default Counter;
