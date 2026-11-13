import React from 'react';
import {Composition} from 'remotion';
import {RobloxStory} from './RobloxStory';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="RobloxStory"
      component={RobloxStory}
      durationInFrames={1650}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
