import { render,screen } from "@testing-library/react";
import { Todo } from "../Todo";
import configStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';

test("todo component should render", () => {
  const mockStore = configStore();
  const initialStates = { state: [] };
  const store = mockStore(initialStates);
  const todo={id:Date.now(),text:"task1",done:false}
  render(
    <Provider store={store}>
      <Todo todo={todo } />
    </Provider>
  );
  const todoElement=screen.getByTestId("todo-test");
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('task1')
});
test('matches snapshot', () => {
  const mockStore = configStore();
  const initialStates = { state: [] };
  const store = mockStore(initialStates);
  const todo={id:Date.now(),text:"task1",done:false}

  const tree = renderer.create(
      <Provider store={store}>
          <Todo todo={todo} />
      </Provider>
  ).toJSON();

  console.log(tree)

  expect(tree).toMatchSnapshot();
})