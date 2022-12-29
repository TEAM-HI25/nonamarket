import styled, { css } from 'styled-components';

const SIZES = {
  s: css`
    --button-width: 56px;
    --button-font-size: 1.2rem;
    --button-padding: 7px 0;
    --button-radius: 26px;
    --button-font-lineheight: 1.502rem;
  `,
  ms: css`
    --button-width: 90px;
    --button-padding: 7px 0;
    --button-radius: 32px;
  `,
  m: css`
    --button-width: 120px;
    --button-padding: 8px 0;
    --button-radius: 30px;
  `,
};

const StyledBtn = styled.button`
  ${(p) => p.sizeStyle};
  width: var(--button-width, 322px);
  cursor: pointer;
  padding: var(--button-padding, 13px 0px);
  border-radius: var(--button-radius, 44px);
  background: var(--button-bg-color, #f5c045);
  color: var(--button-color, #ffffff);
  font-weight: 500;
  font-size: var(--button-font-size, 1.4rem);
  line-height: var(--button-font-lineheight, 1.753rem);
  /* font-family: 'Spoqa Han Sans Neo', sans-serif; */

  &:active {
    ${(p) =>
      !p.disabled &&
      `
      background: var(--button-hover-bg-color, #ffffff);
      color: var(--button-color, #767676);
      outline: 1px solid #dbdbdb;
      `}
  }
  &:disabled {
    cursor: pointer;
    background: var(--button-bg-color, #c8beab);
  }
`;

export { StyledBtn, SIZES };
