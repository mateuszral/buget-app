import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  & > div {
    margin: 20px 0;

    ul {
      li {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.125);
      }
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  & > div:last-of-type {
    div {
      display: flex;
      gap: 20px;
      margin: 10px 0;
    }
  }

  & > div:first-of-type {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: ${({ theme }) => theme.grey300};
      padding: 10px;
      border-radius: 10px;
    }
  }
`;

const Home = () => (
  <Wrapper>
    <h1>Budget planner</h1>
    <div>
      <div>
        <span>Budget: $5000</span>
        <button>Change</button>
      </div>
      <div>Remaining: $3250</div>
      <div>Spent: $1750</div>
    </div>
    <div>
      <h2>Expenses</h2>
      <ul>
        <li>
          <span>Shopping</span>
          <div>
            <span>$50</span>
            <button>Delete</button>
          </div>
        </li>
        <li>
          <span>Fuel</span>
          <div>
            <span>$150</span>
            <button>Delete</button>
          </div>
        </li>
        <li>
          <span>Holiday</span>
          <div>
            <span>$500</span>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <h2>Add expense</h2>
      <div>
        <label htmlFor="name">
          Name
          <input name="name" id="name" />
        </label>
        <label htmlFor="cost">
          Cost
          <input name="cost" id="cost" />
        </label>
      </div>
      <button>Add</button>
    </div>
  </Wrapper>
);

export default Home;
