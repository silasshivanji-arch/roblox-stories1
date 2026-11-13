import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';

const scenes = [
  {time: 0, title: 'NEVER OPEN', subtitle: 'DOOR NUMBER 7', color: '#080b18'},
  {time: 240, title: 'IT WAS 3:00 AM', subtitle: 'I heard someone knocking...', color: '#10152a'},
  {time: 480, title: 'KNOCK... KNOCK...', subtitle: 'But nobody was supposed to be there.', color: '#160d20'},
  {time: 720, title: 'DOOR NUMBER 7', subtitle: 'It slowly started opening by itself.', color: '#210b13'},
  {time: 960, title: 'SOMEONE WAS INSIDE', subtitle: 'And it was wearing MY FACE.', color: '#290609'},
  {time: 1200, title: 'THEN MY PHONE RANG', subtitle: 'The caller ID said: ME.', color: '#100817'},
  {time: 1440, title: 'I WAS STILL INSIDE', subtitle: 'So... who opened the door?', color: '#050509'},
];

export const RobloxStory: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneIndex = Math.min(
    Math.floor(frame / 240),
    scenes.length - 1
  );

  const scene = scenes[sceneIndex];

  const fade = interpolate(
    frame % 240,
    [0, 20, 220, 239],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
  );

  const pulse = 1 + Math.sin(frame / 8) * 0.025;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: scene.color,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 65,
        opacity: fade,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 100,
          color: '#ff3333',
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: 8,
        }}
      >
        ROBLOX HORROR STORIES
      </div>

      <div
        style={{
          fontSize: 85,
          fontWeight: 1000,
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: 1.2,
          textShadow: '0px 8px 25px #000000',
          transform: `scale(${pulse})`,
        }}
      >
        {scene.title}
      </div>

      <div
        style={{
          marginTop: 45,
          fontSize: 39,
          color: '#ff4545',
          textAlign: 'center',
          fontWeight: 700,
          lineHeight: 1.4,
        }}
      >
        {scene.subtitle}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 100,
          color: '#888888',
          fontSize: 25,
          letterSpacing: 5,
        }}
      >
        PART 1 • DON'T WATCH ALONE
      </div>
    </AbsoluteFill>
  );
};
