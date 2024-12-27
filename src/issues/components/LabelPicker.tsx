import { useLabels } from '../hooks';
import { LoadingSpinner } from '../../shared';

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {labelsQuery.data?.map(label => (
        <span
          key={label.id}
          className='animate-fade-in px-2 py-1 rounded-full text-xs font-semibold hover:bg-gray-800 cursor-pointer text-center'
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
