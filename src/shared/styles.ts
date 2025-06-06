import { cva } from 'class-variance-authority';

export const titleStyle = cva('font-bold text-[40px] text-[var(--selected-text-color)]', {
  variants: {
    font: {
      kodchasan: 'font-[Kodchasan]',
      Inter: 'font-[Inter]',
    }
  }
})

export const normalTextStyle = cva('font-[Inter] text-[var(--selected-text-color)] text-[15px] font-normal')