import { Brand } from '../../../types';

export const CardBrandList: Brand[] = [
  {
    label: '포코 카드',
    color: '#E24141',
    bankId: ['1', '1'],
  },
  {
    label: '준 카드',
    color: '#547CE4',
    bankId: ['2', '2'],
  },
  {
    label: '현석 카드',
    color: '#73BC6D',
    bankId: ['3', '3'],
  },
  {
    label: '윤호 카드',
    color: '#DE59B9',
    bankId: ['4', '4'],
  },
  {
    label: '환오 카드',
    color: '#AFEADF',
    bankId: ['5', '5'],
  },
  {
    label: '태은 카드',
    color: '#E76E9A',
    bankId: ['6', '6'],
  },
  {
    label: '준일 카드',
    color: '#F37E3B',
    bankId: ['7', '7'],
  },
  {
    label: '은규 카드',
    color: '#FBCD58',
    bankId: ['8', '8'],
  },
];

interface Props {
  onClick: (brand: Brand) => void;
}

export const BrandList = ({ onClick }: Props) => {
  return (
    <div className='grid'>
      {CardBrandList.map((brand) => (
        <div className='modal-item-container' key={brand.label}>
          <div
            className='modal-item-dot'
            onClick={() => onClick(brand)}
            style={{ backgroundColor: brand.color }}
          />
          <span className='modal-item-name'>{brand.label}</span>
        </div>
      ))}
    </div>
  );
};
