import ContentLoader from 'react-content-loader';

export const ImageSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 300 110"
      height={300}
      width={900}
      backgroundColor="transparent"
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
      <circle cx="276" cy="86" r="8" />
    </ContentLoader>
  );
};

ImageSkeleton.metadata = {
  ame: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
};
