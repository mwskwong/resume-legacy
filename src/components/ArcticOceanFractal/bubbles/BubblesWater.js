import BubbleFloating from "./BubbleFloating";
import { waterCircles } from "./pathData";

const BubbleFishSwarm = props => (
  <g>
    {waterCircles.map(({ cx, cy, r }, index) => (
      <BubbleFloating key={`${cx}-${cy}-${r}`} animDelay={index} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
);

BubbleFishSwarm.whyDidYouRender = true;

export default BubbleFishSwarm;