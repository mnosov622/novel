import BaseIcon from './BaseIcon';

const CheckIcon = (props) => {
  return (
    <BaseIcon>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-check'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        stroke-width='2'
        stroke='currentColor'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M5 12l5 5l10 -10'></path>
      </svg>
    </BaseIcon>
  );
};

export default CheckIcon;
