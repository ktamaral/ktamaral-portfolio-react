import {FC, memo} from 'react';

import {SkillCard} from '../../../data/dataDef';

const SkillCard: FC<{skillCard: SkillCard}> = memo(({skillCard}) => {
  const {title, description} = skillCard;
  /*<img src={image} alt={title} className="w-full"/>*/
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-medium text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';
export default SkillCard;
