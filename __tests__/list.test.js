import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Spendings from '@/app/(components)/spendings';

describe('Spendings List Tests', () => {
    const spendingsData = [
        {
            "id": 1,
            "description": "A",
            "amount": 100,
            "currency": "USD",
            "spent_at": "2024-01-12T22:22:22.222222Z"
        },
        {
            "id": 2,
            "description": "B",
            "amount": 200,
            "currency": "USD",
            "spent_at": "2024-01-12T11:11:11.111111Z"
        },
        {
            "id": 3,
            "description": "C",
            "amount": 300,
            "currency": "HUF",
            "spent_at": "2024-01-12T05:05:05.050505Z"
        },
    ];

    it('list default order is time descending', () =>{
        render(<Spendings spendings={spendingsData}/>)
        const spendingsParent = screen.getByTestId("spendings-parent");
        const children = spendingsParent.children;

        expect(children.item(1).getAttribute('id')).toBe("1");
        expect(children.item(2).getAttribute('id')).toBe("2");
        expect(children.item(3).getAttribute('id')).toBe("3");
    })

    it('list reordered after selection', async () =>{
        const user = userEvent.setup()

        render(<Spendings spendings={spendingsData}/>)
        const spendingsParent = screen.getByTestId("spendings-parent");
        const children = spendingsParent.children;

        expect(children.item(1).getAttribute('id')).toBe("1");
        expect(children.item(2).getAttribute('id')).toBe("2");
        expect(children.item(3).getAttribute('id')).toBe("3");

        await user.selectOptions(screen.getByTestId('select-order'), ['-amount']);

        expect(children.item(1).getAttribute('id')).toBe("3");
        expect(children.item(2).getAttribute('id')).toBe("2");
        expect(children.item(3).getAttribute('id')).toBe("1");
    })

    it('list filtered after HUF selected', async ()=> {
        const user = userEvent.setup()

        render(<Spendings spendings={spendingsData}/>)
        const spendingsParent = screen.getByTestId("spendings-parent");
        const children = spendingsParent.children;

        expect(children.item(1).getAttribute('currency')).toEqual("USD");
        expect(children.item(2).getAttribute('currency')).toEqual("USD");
        expect(children.item(3).getAttribute('currency')).toEqual("HUF");

        await user.click(screen.getByRole('button', {name: 'HUF'}));

        expect(children.item(1).getAttribute('currency')).toEqual("HUF");
        expect(children.item(2)).toBeNull();
    })
})