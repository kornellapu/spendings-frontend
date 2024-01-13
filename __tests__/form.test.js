import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormAddSpending from '../app/(components)/form-add-spending'
 
describe('Form Add Spendings Test', () => {
  it('renders input fields', () => {
    render(<FormAddSpending />);
    const descriptionInput = screen.getByTestId("description");
    const amountInput = screen.getByPlaceholderText("0");
    expect(descriptionInput).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
  })

  it('renders save button', () =>{
    render(<FormAddSpending />);
    const saveButton = screen.getByRole('button', {name: 'Save'});
    expect(saveButton).toBeInTheDocument();
  })

  it('click empties form', async () =>{
    const user = userEvent.setup();
    
    async function postCallback(data){}
    async function refreshCallback(){}

    render(<FormAddSpending postFunctionCallback={postCallback} refreshSpendingsCallback={refreshCallback} />);
    const descriptionInput = screen.getByPlaceholderText("description");
    const amountInput = screen.getByPlaceholderText("0");
    const saveButton = screen.getByRole("button", {name: "Save"});

    await user.type(descriptionInput, "UnitTester");
    await user.type(amountInput, "101100111");

    await user.click(saveButton);

    expect(descriptionInput.value).toBe("");
    expect(amountInput.value).toBe("");
  })

  it('invalid appears without fill', async () => {
    const user = userEvent.setup();
    const callback = (x) => x;
    render(<FormAddSpending postFunctionCallback={callback} refreshSpendingsCallback={callback}/>);

    const descriptionInput = screen.getByPlaceholderText("description");
    const amountInput = screen.getByPlaceholderText("0");
    const saveButton = screen.getByRole("button", {name: "Save"});

    expect(descriptionInput.getAttribute("class").includes("invalid:")).toBe(false);
    expect(amountInput.getAttribute("class").includes("invalid:")).toBe(false);

    await user.click(saveButton);

    expect(descriptionInput.getAttribute("class").includes("invalid:")).toBe(true);
    expect(amountInput.getAttribute("class").includes("invalid:")).toBe(true);
  })
})